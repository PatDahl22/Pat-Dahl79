// ─────────────────────────────────────────────────────────────────────────────
// FALL-LARM — Lägg till detta objekt i projects-arrayen i src/data/index.ts
// Placera det SIST i arrayen (efter det sista projektet, innan den avslutande ])
// ─────────────────────────────────────────────────────────────────────────────

{
  id: 7,
  slug: "fall-larm",
  title: "Fall-Larm",
  description: "IoT-system för automatisk falldetektering hos äldre — end-to-end krypterat, GDPR-komplett och nätverkssäkrat med mTLS.",
  fullDescription: "Fall-Larm är ett end-to-end IoT-system som detekterar fall hos äldre hemmaboende via accelerometer på en ESP32-C6. Larmdata krypteras direkt på enheten med XChaCha20-Poly1305 (libsodium) och skickas via MQTT/TLS till en lokal Raspberry Pi Zero 2W (fog-nod) som lagrar data i en SQLCipher-krypterad databas — utan att känslig hälsodata lämnar hemnätverket.",
  category: "IoT & Säkerhet",
  image: "/assets/fl/Topology.png",
  images: [
    "/assets/fl/Topology.png",
    "/assets/fl/Fall-Larm-C4.png",
    "/assets/fl/DBKryptering.png",
    "/assets/fl/Komponentdiagram.png",
    "/assets/fl/C4Level1.png",
    "/assets/fl/C4Level2.png"
  ],
  tools: [
    "ESP32-C6",
    "FreeRTOS / C",
    "libsodium",
    "Python 3",
    "MQTT / Mosquitto",
    "SQLCipher",
    "Raspberry Pi Zero 2W",
    "mTLS / OpenSSL",
    "fail2ban",
    "pynacl"
  ],
  status: "case-study" as const,
  githubLink: "https://github.com/PatDahl22/IoT-Fall_Larm",
  date: "2025–2026",
  myrole: "IoT-utvecklare — ansvarig för hela stacken: firmware (C/FreeRTOS), säkerhetsarkitektur, fog-backend (Python) och GDPR-implementering.",
  assignmentdescription: "Skolprojekt inom IoT-utbildning (YH) med fokus på verklighetsnära säkerhetskrav. Uppgiften var att bygga ett komplett IoT-system för falldetektering med hänsyn till GDPR och säkerhet i varje lager.",
  assignmentimg: [],
  challenge: "Fall är den vanligaste orsaken till allvarliga skador hos äldre. Befintliga larm kräver att användaren aktivt trycker — något som inte fungerar vid ett plötsligt fall. Utmaningen var att bygga ett system som detekterar fall automatiskt, kommunicerar säkert, och hanterar känsliga hälsouppgifter enligt GDPR — utan att data lämnar hemmet.",
  solution: "Ett trelagers-system: ESP32-C6 (edge) med 3-fas falldetektering och end-to-end kryptering via libsodium. Raspberry Pi Zero 2W (fog) som lokal hub med SQLCipher-databas, automatisk GDPR-retention och daglig backup. Nätverksskikt med TLS på port 8883, mTLS per enhet och fail2ban mot brute force.",
  results: [
    "End-to-end kryptering verifierad: 145 B klartext → 185 B cipher, negativtest med fel nyckel bekräftat",
    "NVS-buffer klarar upp till 16 larm offline — flushas automatiskt vid återanslutning",
    "SQLCipher AES-256 aktiverat med GDPR-kompatibel retention och 30-dagars backup",
    "mTLS med per-enhet-certifikat signerade av intern CA — varje enhet autentiseras individuellt",
    "fail2ban blockerar IP efter 5 misslyckade anslutningar på 120 sekunder"
  ],
  conclusion: [
    "Fall-Larm visar att IoT-säkerhet inte behöver väljas bort i skolprojekt — det är möjligt att implementera verklighetsnära skydd med rätt arkitekturval.",
    "Valet av fog-arkitektur (lokal Raspberry Pi) istället för molnet var avgörande för GDPR-efterlevnad och minimerar attackytan.",
    "Mjukt beroende på SQLCipher (graceful fallback till sqlite3 med varning) visar att robusthet och transparens kan kombineras.",
    "Nästa steg: Topic-ACL:er för fine-grained behörighet per enhet, certifikatrevokering (CRL/OCSP) och integration med fysisk ESP32-C6."
  ],
  keyFeatures: [
    "3-fas accelerometer-falldetektering (FreeRTOS tasks)",
    "XChaCha20-Poly1305 kryptering på edge (libsodium)",
    "NVS-flash offline-buffer — 16 slots, överlever omstart",
    "SQLCipher AES-256 databas + GDPR retention + daglig backup",
    "MQTT över TLS port 8883 + mTLS per-enhet-certifikat",
    "fail2ban brute-force-skydd"
  ],
  figmaimg: [
    {
      img: "/assets/fl/Topology.png",
      title: "Systemtopologi",
      description: ["Visar hela systemet: ESP32 (edge) → MQTT/TLS → Raspberry Pi (fog) → SQLCipher-databas → Cloud (framtida)."]
    },
    {
      img: "/assets/fl/Fall-Larm-C4.png",
      title: "C4-komponentdiagram",
      description: ["Detaljerad vy av ESP32-firmware (FreeRTOS-tasks) och fog hub (Python-moduler)."]
    },
    {
      img: "/assets/fl/DBKryptering.png",
      title: "Databaskryptering",
      description: ["SQLCipher + Libsodium på Raspberry Pi Zero 2W: krypterad SQLite-databas, access control och audit log."]
    },
    {
      img: "/assets/fl/Komponentdiagram.png",
      title: "Kopplingsdiagram",
      description: ["Hårdvarukomponenter: ESP32-C6, accelerometer, buzzer, LED och knapp."]
    }
  ],
},
