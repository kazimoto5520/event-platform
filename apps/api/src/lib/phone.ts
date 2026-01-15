export function cleanPhone(input: string): string {
  return input.replace(/[^\d]/g, "");
}

export function isValidPhone(phone: string): boolean {
  const value = cleanPhone(phone);

  if (value.startsWith("255")) {
    return value.length === 12;
  }

  if (value.startsWith("0")) {
    return value.length === 10;
  }

  return value.length === 9;
}

export function normalizePhone(phone: string): string {
  const value = cleanPhone(phone);

  if (value.startsWith("255")) {
    return value;
  }

  if (value.startsWith("0")) {
    return "255" + value.substring(1);
  }

  return "255" + value;
}
