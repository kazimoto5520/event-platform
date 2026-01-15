import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model InvitationScan
 *
 */
export type InvitationScanModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitationScanPayload>;
export type AggregateInvitationScan = {
    _count: InvitationScanCountAggregateOutputType | null;
    _min: InvitationScanMinAggregateOutputType | null;
    _max: InvitationScanMaxAggregateOutputType | null;
};
export type InvitationScanMinAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    eventId: string | null;
    scannerId: string | null;
    scanResult: $Enums.ScanResult | null;
    scannedAt: Date | null;
    scannerIp: string | null;
    createdAt: Date | null;
};
export type InvitationScanMaxAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    eventId: string | null;
    scannerId: string | null;
    scanResult: $Enums.ScanResult | null;
    scannedAt: Date | null;
    scannerIp: string | null;
    createdAt: Date | null;
};
export type InvitationScanCountAggregateOutputType = {
    id: number;
    invitationId: number;
    eventId: number;
    scannerId: number;
    scanResult: number;
    scannedAt: number;
    scannerIp: number;
    createdAt: number;
    _all: number;
};
export type InvitationScanMinAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    scannerId?: true;
    scanResult?: true;
    scannedAt?: true;
    scannerIp?: true;
    createdAt?: true;
};
export type InvitationScanMaxAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    scannerId?: true;
    scanResult?: true;
    scannedAt?: true;
    scannerIp?: true;
    createdAt?: true;
};
export type InvitationScanCountAggregateInputType = {
    id?: true;
    invitationId?: true;
    eventId?: true;
    scannerId?: true;
    scanResult?: true;
    scannedAt?: true;
    scannerIp?: true;
    createdAt?: true;
    _all?: true;
};
export type InvitationScanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationScan to aggregate.
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvitationScans to fetch.
     */
    orderBy?: Prisma.InvitationScanOrderByWithRelationInput | Prisma.InvitationScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InvitationScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvitationScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvitationScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InvitationScans
    **/
    _count?: true | InvitationScanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InvitationScanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InvitationScanMaxAggregateInputType;
};
export type GetInvitationScanAggregateType<T extends InvitationScanAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitationScan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvitationScan[P]> : Prisma.GetScalarType<T[P], AggregateInvitationScan[P]>;
};
export type InvitationScanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationScanWhereInput;
    orderBy?: Prisma.InvitationScanOrderByWithAggregationInput | Prisma.InvitationScanOrderByWithAggregationInput[];
    by: Prisma.InvitationScanScalarFieldEnum[] | Prisma.InvitationScanScalarFieldEnum;
    having?: Prisma.InvitationScanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationScanCountAggregateInputType | true;
    _min?: InvitationScanMinAggregateInputType;
    _max?: InvitationScanMaxAggregateInputType;
};
export type InvitationScanGroupByOutputType = {
    id: string;
    invitationId: string;
    eventId: string;
    scannerId: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt: Date;
    scannerIp: string | null;
    createdAt: Date;
    _count: InvitationScanCountAggregateOutputType | null;
    _min: InvitationScanMinAggregateOutputType | null;
    _max: InvitationScanMaxAggregateOutputType | null;
};
type GetInvitationScanGroupByPayload<T extends InvitationScanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvitationScanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvitationScanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvitationScanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvitationScanGroupByOutputType[P]>;
}>>;
export type InvitationScanWhereInput = {
    AND?: Prisma.InvitationScanWhereInput | Prisma.InvitationScanWhereInput[];
    OR?: Prisma.InvitationScanWhereInput[];
    NOT?: Prisma.InvitationScanWhereInput | Prisma.InvitationScanWhereInput[];
    id?: Prisma.StringFilter<"InvitationScan"> | string;
    invitationId?: Prisma.StringFilter<"InvitationScan"> | string;
    eventId?: Prisma.StringFilter<"InvitationScan"> | string;
    scannerId?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    scanResult?: Prisma.EnumScanResultFilter<"InvitationScan"> | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
    scannerIp?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    scanner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type InvitationScanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    scanResult?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    scannerIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    scanner?: Prisma.UserOrderByWithRelationInput;
};
export type InvitationScanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvitationScanWhereInput | Prisma.InvitationScanWhereInput[];
    OR?: Prisma.InvitationScanWhereInput[];
    NOT?: Prisma.InvitationScanWhereInput | Prisma.InvitationScanWhereInput[];
    invitationId?: Prisma.StringFilter<"InvitationScan"> | string;
    eventId?: Prisma.StringFilter<"InvitationScan"> | string;
    scannerId?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    scanResult?: Prisma.EnumScanResultFilter<"InvitationScan"> | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
    scannerIp?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    scanner?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type InvitationScanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    scanResult?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    scannerIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvitationScanCountOrderByAggregateInput;
    _max?: Prisma.InvitationScanMaxOrderByAggregateInput;
    _min?: Prisma.InvitationScanMinOrderByAggregateInput;
};
export type InvitationScanScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvitationScanScalarWhereWithAggregatesInput | Prisma.InvitationScanScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvitationScanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvitationScanScalarWhereWithAggregatesInput | Prisma.InvitationScanScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvitationScan"> | string;
    invitationId?: Prisma.StringWithAggregatesFilter<"InvitationScan"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"InvitationScan"> | string;
    scannerId?: Prisma.StringNullableWithAggregatesFilter<"InvitationScan"> | string | null;
    scanResult?: Prisma.EnumScanResultWithAggregatesFilter<"InvitationScan"> | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeWithAggregatesFilter<"InvitationScan"> | Date | string;
    scannerIp?: Prisma.StringNullableWithAggregatesFilter<"InvitationScan"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvitationScan"> | Date | string;
};
export type InvitationScanCreateInput = {
    id?: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutScansInput;
    event: Prisma.EventCreateNestedOneWithoutScansInput;
    scanner?: Prisma.UserCreateNestedOneWithoutScansInput;
};
export type InvitationScanUncheckedCreateInput = {
    id?: string;
    invitationId: string;
    eventId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutScansNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutScansNestedInput;
    scanner?: Prisma.UserUpdateOneWithoutScansNestedInput;
};
export type InvitationScanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanCreateManyInput = {
    id?: string;
    invitationId: string;
    eventId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanListRelationFilter = {
    every?: Prisma.InvitationScanWhereInput;
    some?: Prisma.InvitationScanWhereInput;
    none?: Prisma.InvitationScanWhereInput;
};
export type InvitationScanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvitationScanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannerId?: Prisma.SortOrder;
    scanResult?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    scannerIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationScanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannerId?: Prisma.SortOrder;
    scanResult?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    scannerIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationScanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    scannerId?: Prisma.SortOrder;
    scanResult?: Prisma.SortOrder;
    scannedAt?: Prisma.SortOrder;
    scannerIp?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationScanCreateNestedManyWithoutScannerInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput> | Prisma.InvitationScanCreateWithoutScannerInput[] | Prisma.InvitationScanUncheckedCreateWithoutScannerInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutScannerInput | Prisma.InvitationScanCreateOrConnectWithoutScannerInput[];
    createMany?: Prisma.InvitationScanCreateManyScannerInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUncheckedCreateNestedManyWithoutScannerInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput> | Prisma.InvitationScanCreateWithoutScannerInput[] | Prisma.InvitationScanUncheckedCreateWithoutScannerInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutScannerInput | Prisma.InvitationScanCreateOrConnectWithoutScannerInput[];
    createMany?: Prisma.InvitationScanCreateManyScannerInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUpdateManyWithoutScannerNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput> | Prisma.InvitationScanCreateWithoutScannerInput[] | Prisma.InvitationScanUncheckedCreateWithoutScannerInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutScannerInput | Prisma.InvitationScanCreateOrConnectWithoutScannerInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutScannerInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutScannerInput[];
    createMany?: Prisma.InvitationScanCreateManyScannerInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutScannerInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutScannerInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutScannerInput | Prisma.InvitationScanUpdateManyWithWhereWithoutScannerInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type InvitationScanUncheckedUpdateManyWithoutScannerNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput> | Prisma.InvitationScanCreateWithoutScannerInput[] | Prisma.InvitationScanUncheckedCreateWithoutScannerInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutScannerInput | Prisma.InvitationScanCreateOrConnectWithoutScannerInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutScannerInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutScannerInput[];
    createMany?: Prisma.InvitationScanCreateManyScannerInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutScannerInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutScannerInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutScannerInput | Prisma.InvitationScanUpdateManyWithWhereWithoutScannerInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type InvitationScanCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput> | Prisma.InvitationScanCreateWithoutEventInput[] | Prisma.InvitationScanUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutEventInput | Prisma.InvitationScanCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.InvitationScanCreateManyEventInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput> | Prisma.InvitationScanCreateWithoutEventInput[] | Prisma.InvitationScanUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutEventInput | Prisma.InvitationScanCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.InvitationScanCreateManyEventInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput> | Prisma.InvitationScanCreateWithoutEventInput[] | Prisma.InvitationScanUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutEventInput | Prisma.InvitationScanCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutEventInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.InvitationScanCreateManyEventInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutEventInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutEventInput | Prisma.InvitationScanUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type InvitationScanUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput> | Prisma.InvitationScanCreateWithoutEventInput[] | Prisma.InvitationScanUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutEventInput | Prisma.InvitationScanCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutEventInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.InvitationScanCreateManyEventInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutEventInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutEventInput | Prisma.InvitationScanUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type InvitationScanCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput> | Prisma.InvitationScanCreateWithoutInvitationInput[] | Prisma.InvitationScanUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutInvitationInput | Prisma.InvitationScanCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.InvitationScanCreateManyInvitationInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput> | Prisma.InvitationScanCreateWithoutInvitationInput[] | Prisma.InvitationScanUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutInvitationInput | Prisma.InvitationScanCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.InvitationScanCreateManyInvitationInputEnvelope;
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
};
export type InvitationScanUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput> | Prisma.InvitationScanCreateWithoutInvitationInput[] | Prisma.InvitationScanUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutInvitationInput | Prisma.InvitationScanCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutInvitationInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.InvitationScanCreateManyInvitationInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutInvitationInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutInvitationInput | Prisma.InvitationScanUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type InvitationScanUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput> | Prisma.InvitationScanCreateWithoutInvitationInput[] | Prisma.InvitationScanUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.InvitationScanCreateOrConnectWithoutInvitationInput | Prisma.InvitationScanCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.InvitationScanUpsertWithWhereUniqueWithoutInvitationInput | Prisma.InvitationScanUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.InvitationScanCreateManyInvitationInputEnvelope;
    set?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    disconnect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    delete?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    connect?: Prisma.InvitationScanWhereUniqueInput | Prisma.InvitationScanWhereUniqueInput[];
    update?: Prisma.InvitationScanUpdateWithWhereUniqueWithoutInvitationInput | Prisma.InvitationScanUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.InvitationScanUpdateManyWithWhereWithoutInvitationInput | Prisma.InvitationScanUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
};
export type EnumScanResultFieldUpdateOperationsInput = {
    set?: $Enums.ScanResult;
};
export type InvitationScanCreateWithoutScannerInput = {
    id?: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutScansInput;
    event: Prisma.EventCreateNestedOneWithoutScansInput;
};
export type InvitationScanUncheckedCreateWithoutScannerInput = {
    id?: string;
    invitationId: string;
    eventId: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanCreateOrConnectWithoutScannerInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput>;
};
export type InvitationScanCreateManyScannerInputEnvelope = {
    data: Prisma.InvitationScanCreateManyScannerInput | Prisma.InvitationScanCreateManyScannerInput[];
    skipDuplicates?: boolean;
};
export type InvitationScanUpsertWithWhereUniqueWithoutScannerInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationScanUpdateWithoutScannerInput, Prisma.InvitationScanUncheckedUpdateWithoutScannerInput>;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutScannerInput, Prisma.InvitationScanUncheckedCreateWithoutScannerInput>;
};
export type InvitationScanUpdateWithWhereUniqueWithoutScannerInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateWithoutScannerInput, Prisma.InvitationScanUncheckedUpdateWithoutScannerInput>;
};
export type InvitationScanUpdateManyWithWhereWithoutScannerInput = {
    where: Prisma.InvitationScanScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateManyMutationInput, Prisma.InvitationScanUncheckedUpdateManyWithoutScannerInput>;
};
export type InvitationScanScalarWhereInput = {
    AND?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
    OR?: Prisma.InvitationScanScalarWhereInput[];
    NOT?: Prisma.InvitationScanScalarWhereInput | Prisma.InvitationScanScalarWhereInput[];
    id?: Prisma.StringFilter<"InvitationScan"> | string;
    invitationId?: Prisma.StringFilter<"InvitationScan"> | string;
    eventId?: Prisma.StringFilter<"InvitationScan"> | string;
    scannerId?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    scanResult?: Prisma.EnumScanResultFilter<"InvitationScan"> | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
    scannerIp?: Prisma.StringNullableFilter<"InvitationScan"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InvitationScan"> | Date | string;
};
export type InvitationScanCreateWithoutEventInput = {
    id?: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutScansInput;
    scanner?: Prisma.UserCreateNestedOneWithoutScansInput;
};
export type InvitationScanUncheckedCreateWithoutEventInput = {
    id?: string;
    invitationId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanCreateOrConnectWithoutEventInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput>;
};
export type InvitationScanCreateManyEventInputEnvelope = {
    data: Prisma.InvitationScanCreateManyEventInput | Prisma.InvitationScanCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type InvitationScanUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationScanUpdateWithoutEventInput, Prisma.InvitationScanUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutEventInput, Prisma.InvitationScanUncheckedCreateWithoutEventInput>;
};
export type InvitationScanUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateWithoutEventInput, Prisma.InvitationScanUncheckedUpdateWithoutEventInput>;
};
export type InvitationScanUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.InvitationScanScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateManyMutationInput, Prisma.InvitationScanUncheckedUpdateManyWithoutEventInput>;
};
export type InvitationScanCreateWithoutInvitationInput = {
    id?: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutScansInput;
    scanner?: Prisma.UserCreateNestedOneWithoutScansInput;
};
export type InvitationScanUncheckedCreateWithoutInvitationInput = {
    id?: string;
    eventId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanCreateOrConnectWithoutInvitationInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput>;
};
export type InvitationScanCreateManyInvitationInputEnvelope = {
    data: Prisma.InvitationScanCreateManyInvitationInput | Prisma.InvitationScanCreateManyInvitationInput[];
    skipDuplicates?: boolean;
};
export type InvitationScanUpsertWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationScanUpdateWithoutInvitationInput, Prisma.InvitationScanUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.InvitationScanCreateWithoutInvitationInput, Prisma.InvitationScanUncheckedCreateWithoutInvitationInput>;
};
export type InvitationScanUpdateWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.InvitationScanWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateWithoutInvitationInput, Prisma.InvitationScanUncheckedUpdateWithoutInvitationInput>;
};
export type InvitationScanUpdateManyWithWhereWithoutInvitationInput = {
    where: Prisma.InvitationScanScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationScanUpdateManyMutationInput, Prisma.InvitationScanUncheckedUpdateManyWithoutInvitationInput>;
};
export type InvitationScanCreateManyScannerInput = {
    id?: string;
    invitationId: string;
    eventId: string;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanUpdateWithoutScannerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutScansNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutScansNestedInput;
};
export type InvitationScanUncheckedUpdateWithoutScannerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanUncheckedUpdateManyWithoutScannerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanCreateManyEventInput = {
    id?: string;
    invitationId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutScansNestedInput;
    scanner?: Prisma.UserUpdateOneWithoutScansNestedInput;
};
export type InvitationScanUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanCreateManyInvitationInput = {
    id?: string;
    eventId: string;
    scannerId?: string | null;
    scanResult: $Enums.ScanResult;
    scannedAt?: Date | string;
    scannerIp?: string | null;
    createdAt?: Date | string;
};
export type InvitationScanUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutScansNestedInput;
    scanner?: Prisma.UserUpdateOneWithoutScansNestedInput;
};
export type InvitationScanUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanUncheckedUpdateManyWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    scannerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanResult?: Prisma.EnumScanResultFieldUpdateOperationsInput | $Enums.ScanResult;
    scannedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scannerIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationScanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    scannerId?: boolean;
    scanResult?: boolean;
    scannedAt?: boolean;
    scannerIp?: boolean;
    createdAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
}, ExtArgs["result"]["invitationScan"]>;
export type InvitationScanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    scannerId?: boolean;
    scanResult?: boolean;
    scannedAt?: boolean;
    scannerIp?: boolean;
    createdAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
}, ExtArgs["result"]["invitationScan"]>;
export type InvitationScanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    scannerId?: boolean;
    scanResult?: boolean;
    scannedAt?: boolean;
    scannerIp?: boolean;
    createdAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
}, ExtArgs["result"]["invitationScan"]>;
export type InvitationScanSelectScalar = {
    id?: boolean;
    invitationId?: boolean;
    eventId?: boolean;
    scannerId?: boolean;
    scanResult?: boolean;
    scannedAt?: boolean;
    scannerIp?: boolean;
    createdAt?: boolean;
};
export type InvitationScanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invitationId" | "eventId" | "scannerId" | "scanResult" | "scannedAt" | "scannerIp" | "createdAt", ExtArgs["result"]["invitationScan"]>;
export type InvitationScanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
};
export type InvitationScanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
};
export type InvitationScanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    scanner?: boolean | Prisma.InvitationScan$scannerArgs<ExtArgs>;
};
export type $InvitationScanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvitationScan";
    objects: {
        invitation: Prisma.$InvitationPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        scanner: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invitationId: string;
        eventId: string;
        scannerId: string | null;
        scanResult: $Enums.ScanResult;
        scannedAt: Date;
        scannerIp: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["invitationScan"]>;
    composites: {};
};
export type InvitationScanGetPayload<S extends boolean | null | undefined | InvitationScanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload, S>;
export type InvitationScanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvitationScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvitationScanCountAggregateInputType | true;
};
export interface InvitationScanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvitationScan'];
        meta: {
            name: 'InvitationScan';
        };
    };
    /**
     * Find zero or one InvitationScan that matches the filter.
     * @param {InvitationScanFindUniqueArgs} args - Arguments to find a InvitationScan
     * @example
     * // Get one InvitationScan
     * const invitationScan = await prisma.invitationScan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationScanFindUniqueArgs>(args: Prisma.SelectSubset<T, InvitationScanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one InvitationScan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationScanFindUniqueOrThrowArgs} args - Arguments to find a InvitationScan
     * @example
     * // Get one InvitationScan
     * const invitationScan = await prisma.invitationScan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationScanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvitationScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InvitationScan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanFindFirstArgs} args - Arguments to find a InvitationScan
     * @example
     * // Get one InvitationScan
     * const invitationScan = await prisma.invitationScan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationScanFindFirstArgs>(args?: Prisma.SelectSubset<T, InvitationScanFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first InvitationScan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanFindFirstOrThrowArgs} args - Arguments to find a InvitationScan
     * @example
     * // Get one InvitationScan
     * const invitationScan = await prisma.invitationScan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationScanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvitationScanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more InvitationScans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvitationScans
     * const invitationScans = await prisma.invitationScan.findMany()
     *
     * // Get first 10 InvitationScans
     * const invitationScans = await prisma.invitationScan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invitationScanWithIdOnly = await prisma.invitationScan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvitationScanFindManyArgs>(args?: Prisma.SelectSubset<T, InvitationScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a InvitationScan.
     * @param {InvitationScanCreateArgs} args - Arguments to create a InvitationScan.
     * @example
     * // Create one InvitationScan
     * const InvitationScan = await prisma.invitationScan.create({
     *   data: {
     *     // ... data to create a InvitationScan
     *   }
     * })
     *
     */
    create<T extends InvitationScanCreateArgs>(args: Prisma.SelectSubset<T, InvitationScanCreateArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many InvitationScans.
     * @param {InvitationScanCreateManyArgs} args - Arguments to create many InvitationScans.
     * @example
     * // Create many InvitationScans
     * const invitationScan = await prisma.invitationScan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvitationScanCreateManyArgs>(args?: Prisma.SelectSubset<T, InvitationScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many InvitationScans and returns the data saved in the database.
     * @param {InvitationScanCreateManyAndReturnArgs} args - Arguments to create many InvitationScans.
     * @example
     * // Create many InvitationScans
     * const invitationScan = await prisma.invitationScan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many InvitationScans and only return the `id`
     * const invitationScanWithIdOnly = await prisma.invitationScan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvitationScanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvitationScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a InvitationScan.
     * @param {InvitationScanDeleteArgs} args - Arguments to delete one InvitationScan.
     * @example
     * // Delete one InvitationScan
     * const InvitationScan = await prisma.invitationScan.delete({
     *   where: {
     *     // ... filter to delete one InvitationScan
     *   }
     * })
     *
     */
    delete<T extends InvitationScanDeleteArgs>(args: Prisma.SelectSubset<T, InvitationScanDeleteArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one InvitationScan.
     * @param {InvitationScanUpdateArgs} args - Arguments to update one InvitationScan.
     * @example
     * // Update one InvitationScan
     * const invitationScan = await prisma.invitationScan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvitationScanUpdateArgs>(args: Prisma.SelectSubset<T, InvitationScanUpdateArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more InvitationScans.
     * @param {InvitationScanDeleteManyArgs} args - Arguments to filter InvitationScans to delete.
     * @example
     * // Delete a few InvitationScans
     * const { count } = await prisma.invitationScan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvitationScanDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvitationScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InvitationScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvitationScans
     * const invitationScan = await prisma.invitationScan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvitationScanUpdateManyArgs>(args: Prisma.SelectSubset<T, InvitationScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more InvitationScans and returns the data updated in the database.
     * @param {InvitationScanUpdateManyAndReturnArgs} args - Arguments to update many InvitationScans.
     * @example
     * // Update many InvitationScans
     * const invitationScan = await prisma.invitationScan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more InvitationScans and only return the `id`
     * const invitationScanWithIdOnly = await prisma.invitationScan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InvitationScanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvitationScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one InvitationScan.
     * @param {InvitationScanUpsertArgs} args - Arguments to update or create a InvitationScan.
     * @example
     * // Update or create a InvitationScan
     * const invitationScan = await prisma.invitationScan.upsert({
     *   create: {
     *     // ... data to create a InvitationScan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvitationScan we want to update
     *   }
     * })
     */
    upsert<T extends InvitationScanUpsertArgs>(args: Prisma.SelectSubset<T, InvitationScanUpsertArgs<ExtArgs>>): Prisma.Prisma__InvitationScanClient<runtime.Types.Result.GetResult<Prisma.$InvitationScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of InvitationScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanCountArgs} args - Arguments to filter InvitationScans to count.
     * @example
     * // Count the number of InvitationScans
     * const count = await prisma.invitationScan.count({
     *   where: {
     *     // ... the filter for the InvitationScans we want to count
     *   }
     * })
    **/
    count<T extends InvitationScanCountArgs>(args?: Prisma.Subset<T, InvitationScanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvitationScanCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a InvitationScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationScanAggregateArgs>(args: Prisma.Subset<T, InvitationScanAggregateArgs>): Prisma.PrismaPromise<GetInvitationScanAggregateType<T>>;
    /**
     * Group by InvitationScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationScanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends InvitationScanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvitationScanGroupByArgs['orderBy'];
    } : {
        orderBy?: InvitationScanGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvitationScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InvitationScan model
     */
    readonly fields: InvitationScanFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for InvitationScan.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InvitationScanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invitation<T extends Prisma.InvitationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvitationDefaultArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    scanner<T extends Prisma.InvitationScan$scannerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvitationScan$scannerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the InvitationScan model
 */
export interface InvitationScanFieldRefs {
    readonly id: Prisma.FieldRef<"InvitationScan", 'String'>;
    readonly invitationId: Prisma.FieldRef<"InvitationScan", 'String'>;
    readonly eventId: Prisma.FieldRef<"InvitationScan", 'String'>;
    readonly scannerId: Prisma.FieldRef<"InvitationScan", 'String'>;
    readonly scanResult: Prisma.FieldRef<"InvitationScan", 'ScanResult'>;
    readonly scannedAt: Prisma.FieldRef<"InvitationScan", 'DateTime'>;
    readonly scannerIp: Prisma.FieldRef<"InvitationScan", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvitationScan", 'DateTime'>;
}
/**
 * InvitationScan findUnique
 */
export type InvitationScanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter, which InvitationScan to fetch.
     */
    where: Prisma.InvitationScanWhereUniqueInput;
};
/**
 * InvitationScan findUniqueOrThrow
 */
export type InvitationScanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter, which InvitationScan to fetch.
     */
    where: Prisma.InvitationScanWhereUniqueInput;
};
/**
 * InvitationScan findFirst
 */
export type InvitationScanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter, which InvitationScan to fetch.
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvitationScans to fetch.
     */
    orderBy?: Prisma.InvitationScanOrderByWithRelationInput | Prisma.InvitationScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvitationScans.
     */
    cursor?: Prisma.InvitationScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvitationScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvitationScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvitationScans.
     */
    distinct?: Prisma.InvitationScanScalarFieldEnum | Prisma.InvitationScanScalarFieldEnum[];
};
/**
 * InvitationScan findFirstOrThrow
 */
export type InvitationScanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter, which InvitationScan to fetch.
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvitationScans to fetch.
     */
    orderBy?: Prisma.InvitationScanOrderByWithRelationInput | Prisma.InvitationScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvitationScans.
     */
    cursor?: Prisma.InvitationScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvitationScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvitationScans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvitationScans.
     */
    distinct?: Prisma.InvitationScanScalarFieldEnum | Prisma.InvitationScanScalarFieldEnum[];
};
/**
 * InvitationScan findMany
 */
export type InvitationScanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter, which InvitationScans to fetch.
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvitationScans to fetch.
     */
    orderBy?: Prisma.InvitationScanOrderByWithRelationInput | Prisma.InvitationScanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InvitationScans.
     */
    cursor?: Prisma.InvitationScanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvitationScans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvitationScans.
     */
    skip?: number;
    distinct?: Prisma.InvitationScanScalarFieldEnum | Prisma.InvitationScanScalarFieldEnum[];
};
/**
 * InvitationScan create
 */
export type InvitationScanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * The data needed to create a InvitationScan.
     */
    data: Prisma.XOR<Prisma.InvitationScanCreateInput, Prisma.InvitationScanUncheckedCreateInput>;
};
/**
 * InvitationScan createMany
 */
export type InvitationScanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvitationScans.
     */
    data: Prisma.InvitationScanCreateManyInput | Prisma.InvitationScanCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * InvitationScan createManyAndReturn
 */
export type InvitationScanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * The data used to create many InvitationScans.
     */
    data: Prisma.InvitationScanCreateManyInput | Prisma.InvitationScanCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * InvitationScan update
 */
export type InvitationScanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * The data needed to update a InvitationScan.
     */
    data: Prisma.XOR<Prisma.InvitationScanUpdateInput, Prisma.InvitationScanUncheckedUpdateInput>;
    /**
     * Choose, which InvitationScan to update.
     */
    where: Prisma.InvitationScanWhereUniqueInput;
};
/**
 * InvitationScan updateMany
 */
export type InvitationScanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update InvitationScans.
     */
    data: Prisma.XOR<Prisma.InvitationScanUpdateManyMutationInput, Prisma.InvitationScanUncheckedUpdateManyInput>;
    /**
     * Filter which InvitationScans to update
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * Limit how many InvitationScans to update.
     */
    limit?: number;
};
/**
 * InvitationScan updateManyAndReturn
 */
export type InvitationScanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * The data used to update InvitationScans.
     */
    data: Prisma.XOR<Prisma.InvitationScanUpdateManyMutationInput, Prisma.InvitationScanUncheckedUpdateManyInput>;
    /**
     * Filter which InvitationScans to update
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * Limit how many InvitationScans to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * InvitationScan upsert
 */
export type InvitationScanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * The filter to search for the InvitationScan to update in case it exists.
     */
    where: Prisma.InvitationScanWhereUniqueInput;
    /**
     * In case the InvitationScan found by the `where` argument doesn't exist, create a new InvitationScan with this data.
     */
    create: Prisma.XOR<Prisma.InvitationScanCreateInput, Prisma.InvitationScanUncheckedCreateInput>;
    /**
     * In case the InvitationScan was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InvitationScanUpdateInput, Prisma.InvitationScanUncheckedUpdateInput>;
};
/**
 * InvitationScan delete
 */
export type InvitationScanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
    /**
     * Filter which InvitationScan to delete.
     */
    where: Prisma.InvitationScanWhereUniqueInput;
};
/**
 * InvitationScan deleteMany
 */
export type InvitationScanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which InvitationScans to delete
     */
    where?: Prisma.InvitationScanWhereInput;
    /**
     * Limit how many InvitationScans to delete.
     */
    limit?: number;
};
/**
 * InvitationScan.scanner
 */
export type InvitationScan$scannerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * InvitationScan without action
 */
export type InvitationScanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvitationScan
     */
    select?: Prisma.InvitationScanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvitationScan
     */
    omit?: Prisma.InvitationScanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvitationScanInclude<ExtArgs> | null;
};
export {};
