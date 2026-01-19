import { z } from "zod";

export const eventStatusSchema = z.enum([
  "DRAFT",
  "LIVE",
  "COMPLETED",
  "CANCELLED",
]);

export const createEventRequestSchema = z.object({
  title: z.string().min(2),
  venue: z.string().min(2),
  eventDate: z.string(), // ISO string
  allowReentry: z.boolean().optional().default(false),
  entryCutoffTime: z.string().nullable().optional(), // ISO string | null
});

export type CreateEventRequest = z.infer<typeof createEventRequestSchema>;

export const updateEventRequestSchema = z.object({
  title: z.string().min(2).optional(),
  venue: z.string().min(2).optional(),
  eventDate: z.string().optional(),
  allowReentry: z.boolean().optional(),
  entryCutoffTime: z.string().nullable().optional(),
});

export type UpdateEventRequest = z.infer<typeof updateEventRequestSchema>;

export const updateEventStatusRequestSchema = z.object({
  status: eventStatusSchema,
});

export type UpdateEventStatusRequest = z.infer<
  typeof updateEventStatusRequestSchema
>;

export const eventResponseSchema = z.object({
  id: z.string(),
  organizerId: z.string(),
  title: z.string(),
  venue: z.string(),
  eventDate: z.string(),
  allowReentry: z.boolean(),
  entryCutoffTime: z.string().nullable(),
  status: eventStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type EventResponse = z.infer<typeof eventResponseSchema>;
