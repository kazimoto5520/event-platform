import type { Dictionary } from "../get-dictionary";

export const en = {
  landing: {
    brand: "Event Platform",
    badgeLeft: "DRAFT → LIVE → COMPLETED",
    badgeRight: "transaction-safe scans",
    title: "Secure event entry with QR validation.",
    subtitle:
      "Create events, issue invitations, and validate entry with duplicate scan detection, strict state rules, and full audit logs.",
    primaryCta: "Get started",
    secondaryCta: "Login",
    bullets: [
      "Roles: Admin, Organizer, Scanner",
      "Invitations: VIP / Regular / Staff / Free",
      "Scans: atomic validation + audit trail",
    ],
    ui: {
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark",
      english: "English",
      swahili: "Swahili",
    },
  },
} as const satisfies Dictionary;
