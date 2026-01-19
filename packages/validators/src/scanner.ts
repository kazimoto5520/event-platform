import { z } from "zod";

export const scanResultSchema = z.enum([
  "SUCCESS",
  "DUPLICATE",
  "INVALID",
  "EXPIRED",
]);

export const scanRequestSchema = z.object({
  qrToken: z.string().min(5),
});

export type ScanRequest = z.infer<typeof scanRequestSchema>;

export const scanResponseSchema = z.object({
  result: scanResultSchema,
  message: z.string(),
  invitationId: z.string().optional(),
  eventId: z.string().optional(),
  entriesUsed: z.number().int().optional(),
  maxEntries: z.number().int().optional(),
});

export type ScanResponse = z.infer<typeof scanResponseSchema>;
