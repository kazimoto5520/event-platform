import { NextResponse } from "next/server";
import { prisma } from "@event-platform/db/client";

export async function GET() {
  try {
    const [
      totalEvents,
      draftEvents,
      liveEvents,
      completedEvents,
      cancelledEvents,

      totalInvitations,
      invitationsCreated,
      invitationsSent,
      invitationsCheckedIn,
      invitationsCancelled,
      invitationsExpired,

      totalScans,
      scansSuccess,
      scansDuplicate,
      scansInvalid,
      scansExpired,
    ] = await Promise.all([
      prisma.event.count(),
      prisma.event.count({ where: { status: "DRAFT" } }),
      prisma.event.count({ where: { status: "LIVE" } }),
      prisma.event.count({ where: { status: "COMPLETED" } }),
      prisma.event.count({ where: { status: "CANCELLED" } }),

      prisma.invitation.count(),
      prisma.invitation.count({ where: { status: "CREATED" } }),
      prisma.invitation.count({ where: { status: "SENT" } }),
      prisma.invitation.count({ where: { status: "CHECKED_IN" } }),
      prisma.invitation.count({ where: { status: "CANCELLED" } }),
      prisma.invitation.count({ where: { status: "EXPIRED" } }),

      prisma.invitationScan.count(),
      prisma.invitationScan.count({ where: { scanResult: "SUCCESS" } }),
      prisma.invitationScan.count({ where: { scanResult: "DUPLICATE" } }),
      prisma.invitationScan.count({ where: { scanResult: "INVALID" } }),
      prisma.invitationScan.count({ where: { scanResult: "EXPIRED" } }),
    ]);

    return NextResponse.json({
      events: {
        total: totalEvents,
        byStatus: {
          DRAFT: draftEvents,
          LIVE: liveEvents,
          COMPLETED: completedEvents,
          CANCELLED: cancelledEvents,
        },
      },
      invitations: {
        total: totalInvitations,
        byStatus: {
          CREATED: invitationsCreated,
          SENT: invitationsSent,
          CHECKED_IN: invitationsCheckedIn,
          CANCELLED: invitationsCancelled,
          EXPIRED: invitationsExpired,
        },
      },
      scans: {
        total: totalScans,
        byResult: {
          SUCCESS: scansSuccess,
          DUPLICATE: scansDuplicate,
          INVALID: scansInvalid,
          EXPIRED: scansExpired,
        },
      },
    });
  } catch (error) {
    console.error("Dashboard summary error:", error);
    return NextResponse.json(
      { error: "Failed to load dashboard summary" },
      { status: 500 }
    );
  }
}
