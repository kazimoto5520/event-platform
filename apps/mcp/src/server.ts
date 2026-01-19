import { createEventTool } from "./tools/create-event";
import { createInvitationsBulkTool } from "./tools/create-invitations-bulk";
import { scanTicketTool } from "./tools/scan-ticket";
import { createLoggerWithContext } from "@event-platform/logger";

const log = createLoggerWithContext("mcp-server");

type Tool = {
  name: string;
  description: string;
  inputSchema: any;
  run: (input: any) => Promise<any>;
};

export function createMcpServer() {
  const tools: Tool[] = [
    createEventTool(),
    createInvitationsBulkTool(),
    scanTicketTool(),
  ];

  return {
    async start() {
      log.info("MCP Server running (skeleton mode)...");
      log.info("Available tools:");
      for (const t of tools) log.info(`- ${t.name}: ${t.description}`);
    },

    async callTool(name: string, input: unknown) {
        const tool = tools.find((t) => t.name === name);
        if (!tool) throw new Error(`Tool not found: ${name}`);
        return tool.run(input);
    },
  };
}
