const encoder = new TextEncoder();

function base64UrlEncode(value) {
  const bytes = value instanceof Uint8Array ? value : encoder.encode(value);
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlDecode(value) {
  const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new TextDecoder().decode(bytes);
}

async function getSigningKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export function getAuthSecret() {
  return process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "";
}

export async function createAdminSession(payload, secret) {
  const body = base64UrlEncode(JSON.stringify(payload));
  const key = await getSigningKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  return `${body}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifyAdminSession(token, secret) {
  if (!token || !secret) {
    return null;
  }

  const [body, signature] = token.split(".");

  if (!body || !signature) {
    return null;
  }

  const key = await getSigningKey(secret);
  const signatureBytes = Uint8Array.from(
    atob(signature.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(signature.length / 4) * 4, "=")),
    (char) => char.charCodeAt(0),
  );
  const valid = await crypto.subtle.verify("HMAC", key, signatureBytes, encoder.encode(body));

  if (!valid) {
    return null;
  }

  const payload = JSON.parse(base64UrlDecode(body));

  if (!payload.expiresAt || Date.now() > payload.expiresAt) {
    return null;
  }

  return payload;
}
