import { DashboardSummary, dashboardSummarySchema } from "@event-platform/validators";
import type { AxiosInstance } from "axios";

export function dashboardApi(instance: AxiosInstance) {
  return {
    async getSummary(): Promise<DashboardSummary> {
      const response = await instance.get("/api/dashboard/summary");
      return dashboardSummarySchema.parse(response.data);
    },
  };
}