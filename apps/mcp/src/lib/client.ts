import { createApiClient } from "@event-platform/api-client";
import { createLoggerWithContext } from "@event-platform/logger";

const log = createLoggerWithContext("mcp-client");

export function getPlatformClient(opts?: { token?: string }) {
  const baseURL = process.env.API_BASE_URL;

  if (!baseURL) {
    throw new Error("Missing API_BASE_URL in apps/mcp/.env");
  }

  return createApiClient({
    baseURL,
    getToken: () => opts?.token ?? null,
    onUnauthorized: () => {
      log.warn("Unauthorized (401) from API");
    },
  });
}
