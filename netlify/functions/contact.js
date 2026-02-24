const sgMail = require("@sendgrid/mail");

const json = (statusCode, body, origin) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    ...(origin ? { "Access-Control-Allow-Origin": origin } : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: JSON.stringify(body),
});

const getAllowedOrigin = (origin) => {
  const list = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // Om du bara kör från samma domän kan du lämna ALLOWED_ORIGINS tom och då blir origin null.
  if (!origin || list.length === 0) return origin || null;

  return list.includes(origin) ? origin : null;
};

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin;
  const allowedOrigin = getAllowedOrigin(origin);

  // Preflight
  if (event.httpMethod === "OPTIONS") {
    if (origin && !allowedOrigin) {
      return json(403, { error: "Origin not allowed" }, null);
    }
    return {
      statusCode: 204,
      headers: {
        ...(allowedOrigin ? { "Access-Control-Allow-Origin": allowedOrigin } : {}),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" }, allowedOrigin);
  }

  if (origin && !allowedOrigin) {
    return json(403, { error: "Origin not allowed" }, null);
  }

  try {
    const { name, email, message, website } = JSON.parse(event.body || "{}");

    // Honeypot (bots fyller ofta i dolda fält)
    if (website) {
      return json(200, { ok: true }, allowedOrigin);
    }

    if (!name || !email || !message) {
      return json(400, { error: "Missing fields" }, allowedOrigin);
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const from = process.env.SENDGRID_FROM; // verified sender
    const to = process.env.SENDGRID_TO;

    // 1) Mail till dig
    await sgMail.send({
      to,
      from,
      subject: `Nytt meddelande från ${name}`,
      replyTo: email,
      text:
        `Namn: ${name}\n` +
        `Email: ${email}\n\n` +
        `Meddelande:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Nytt meddelande</h2>
          <p><b>Namn:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Meddelande:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    // 2) Auto-reply till besökaren (valfritt men snyggt)
    await sgMail.send({
      to: email,
      from,
      subject: "Tack! Jag återkommer snart.",
      text: `Hej ${name}!\n\nTack för ditt meddelande. Jag återkommer så snart jag kan.\n\n/Pat`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <p>Hej ${escapeHtml(name)}!</p>
          <p>Tack för ditt meddelande. Jag återkommer så snart jag kan.</p>
          <p>/Pat</p>
        </div>
      `,
    });

    return json(200, { ok: true }, allowedOrigin);
  } catch (err) {
    console.error(err);
    return json(500, { error: "Server error" }, allowedOrigin);
  }
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}