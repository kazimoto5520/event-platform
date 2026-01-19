import type { AxiosInstance } from "axios";
import {
  scanRequestSchema,
  scanResponseSchema,
  type ScanRequest,
  type ScanResponse,
} from "@event-platform/validators";

export function scannerApi(client: AxiosInstance) {
  return {
    async scan(payload: ScanRequest): Promise<ScanResponse> {
      const body = scanRequestSchema.parse(payload);
      const res = await client.post("/api/scanner/scan", body);
      return scanResponseSchema.parse(res.data);
    },

    async checkIn(payload: ScanRequest): Promise<ScanResponse> {
      const body = scanRequestSchema.parse(payload);
      const res = await client.post("/api/scanner/check-in", body);
      return scanResponseSchema.parse(res.data);
    },
  };
}
