export default async function handler(req, res) {
  // ✅ CORS Headers for extension
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // ✅ Preflight support
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // ✅ Reject non-POST methods
  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "Only POST method is allowed.",
    });
  }

  const randomToken = () => Math.random().toString(36).substring(2);

  try {
    const { key, mac } = req.body || {};

    // ✅ Simulated successful automation trigger
    return res.status(200).json({
      status: "ok",
      data: {
        leftDays: 30,
        keyType: "monthly",
        appVersion: "6.20.11",
        message: "Automation triggered successfully",
        "AccessToken": "6b87036af1b3eb1eae8fef8211a7df7749875940d2868b8d7c16",
        key: key || "demo",
        mac: mac || "demo-mac",
        token: randomToken(),
        _token: randomToken(),
        accesstoken: randomToken(),
        auth_token: randomToken(),
        access_token: randomToken(),
        license_key: randomToken(),
      },
    });
  } catch (error) {
    console.error("Error in /process-auth:", error);
    return res.status(500).json({
      status: "fail",
      message: "Internal server error during process-auth",
      error: error.message || "Unknown error",
    });
  }
}
