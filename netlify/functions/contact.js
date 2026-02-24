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

  // If you only run from the same domain, you can leave ALLOWED_ORIGINS empty and origin will be null.
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

    // Honeypot (bots often fill in hidden fields)
    if (website) {
      return json(200, { ok: true }, allowedOrigin);
    }

    if (!name || !email || !message) {
      return json(400, { error: "Missing fields" }, allowedOrigin);
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const from = process.env.SENDGRID_FROM; // verified sender
    const to = process.env.SENDGRID_TO;

    // 1) Mail to you
    await sgMail.send({
      to,
      from,
      subject: `New message from ${name}`,
      replyTo: email,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New message</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    // 2) Auto-reply to visitor (optional but nice)
    await sgMail.send({
      to: email,
      from,
      subject: "Thank you! I will get back to you soon.",
      text: `Hi ${name}!\n\nThank you for your message. I will get back to you as soon as I can.\n\n/Pat`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <p>Hi ${escapeHtml(name)}!</p>
          <p>Thank you for your message. I will get back to you as soon as I can.</p>
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