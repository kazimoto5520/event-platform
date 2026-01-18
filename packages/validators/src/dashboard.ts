import { z } from "zod";

export const dashboardSummarySchema = z.object({
    events: z.object({
        total: z.number(),
        byStatus: z.object({
            DRAFT: z.number(),
            LIVE: z.number(),
            COMPLETED: z.number(),
            CANCELLED: z.number(),
        }),
    }),
    invitations: z.object({
        total: z.number(),
        byStatus: z.object({
            CREATED: z.number(),
            SENT: z.number(),
            CHECKED_IN: z.number(),
            CANCELLED: z.number(),
            EXPIRED: z.number(),
        }),
    }),
    scans: z.object({
        total: z.number(),
        byResult: z.object({
            SUCCESS: z.number(),
            DUPLICATE: z.number(),
            INVALID: z.number(),
            EXPIRED: z.number(),
        }),
    }),
});

export type DashboardSummary = z.infer<typeof dashboardSummarySchema>;
