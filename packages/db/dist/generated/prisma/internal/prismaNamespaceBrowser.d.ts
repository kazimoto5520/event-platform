import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client.js").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client.js").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client.js").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Event: "Event";
    readonly Invitation: "Invitation";
    readonly InvitationScan: "InvitationScan";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly phone: "phone";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly organizerId: "organizerId";
    readonly title: "title";
    readonly venue: "venue";
    readonly eventDate: "eventDate";
    readonly allowReentry: "allowReentry";
    readonly entryCutoffTime: "entryCutoffTime";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const InvitationScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly guestName: "guestName";
    readonly guestPhone: "guestPhone";
    readonly ticketType: "ticketType";
    readonly price: "price";
    readonly inviteCode: "inviteCode";
    readonly qrToken: "qrToken";
    readonly status: "status";
    readonly maxEntries: "maxEntries";
    readonly entriesUsed: "entriesUsed";
    readonly sentAt: "sentAt";
    readonly checkedInAt: "checkedInAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];
export declare const InvitationScanScalarFieldEnum: {
    readonly id: "id";
    readonly invitationId: "invitationId";
    readonly eventId: "eventId";
    readonly scannerId: "scannerId";
    readonly scanResult: "scanResult";
    readonly scannedAt: "scannedAt";
    readonly scannerIp: "scannerIp";
    readonly createdAt: "createdAt";
};
export type InvitationScanScalarFieldEnum = (typeof InvitationScanScalarFieldEnum)[keyof typeof InvitationScanScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly ip: "ip";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: "DbNull";
    readonly JsonNull: "JsonNull";
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: "DbNull";
    readonly JsonNull: "JsonNull";
    readonly AnyNull: "AnyNull";
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
