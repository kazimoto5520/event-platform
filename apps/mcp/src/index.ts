import "dotenv/config"
import { createLoggerWithContext } from "@event-platform/logger";
import { createMcpServer } from "./server";

const log = createLoggerWithContext("mcp-server");

async function main() {
    log.info("Creating MCP server...");

    const server = createMcpServer();
    await server.start();
}

main().catch((err) => {
    log.error("MCP failed to start:", err);
    process.exit(1);
});