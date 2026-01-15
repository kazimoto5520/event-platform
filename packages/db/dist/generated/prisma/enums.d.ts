export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly ORGANIZER: "ORGANIZER";
    readonly SCANNER: "SCANNER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly LIVE: "LIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const InvitationStatus: {
    readonly CREATED: "CREATED";
    readonly SENT: "SENT";
    readonly CHECKED_IN: "CHECKED_IN";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
};
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];
export declare const TicketType: {
    readonly REGULAR: "REGULAR";
    readonly VIP: "VIP";
    readonly STAFF: "STAFF";
    readonly FREE: "FREE";
    readonly SINGLE: "SINGLE";
    readonly DOUBLE: "DOUBLE";
};
export type TicketType = (typeof TicketType)[keyof typeof TicketType];
export declare const ScanResult: {
    readonly SUCCESS: "SUCCESS";
    readonly DUPLICATE: "DUPLICATE";
    readonly INVALID: "INVALID";
    readonly EXPIRED: "EXPIRED";
};
export type ScanResult = (typeof ScanResult)[keyof typeof ScanResult];
