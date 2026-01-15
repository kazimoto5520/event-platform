import axios from "axios";

const API_KEY = process.env.BEEM_API_KEY!;
const SECRET_KEY = process.env.BEEM_SECRET_KEY!;
const BEEM_URL = process.env.BEEM_URL!;

if (!API_KEY || !SECRET_KEY || !BEEM_URL) {
  throw new Error(
    "Missing BEEM SMS environment variables. Please set BEEM_API_KEY, BEEM_SECRET_KEY, BEEM_URL."
  );
}

const authHeader = Buffer.from(`${API_KEY}:${SECRET_KEY}`).toString("base64");

function createPayload(phone: string, message: string) {
  return {
    source_addr: "Winvo",
    schedule_time: "",
    encoding: "0",
    message,
    recipients: [
      {
        recipient_id: 1,
        dest_addr: phone,
      },
    ],
  };
}

async function retry<T>(
  fn: () => Promise<T>,
  attempts = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    console.warn(`SMS retry in ${delay}ms...`);
    await new Promise((res) => setTimeout(res, delay));
    return retry(fn, attempts - 1, delay * 2);
  }
}

export async function sendSms(phone: string, message: string): Promise<void> {
  const payload = createPayload(phone, message);

  await retry(async () => {
    const res = await axios.post(BEEM_URL, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authHeader}`,
      },
      timeout: 10000,
    });

    if (res.status !== 200) {
      throw new Error(`SMS failed with status: ${res.status}`);
    }

    console.log(`SMS sent successfully to ${phone}`);
  });
}
