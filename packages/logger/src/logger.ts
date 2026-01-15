import pino from "pino";

const isPretty = process.env.LOG_PRETTY === "true";

const baseLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  serializers: {
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
    err: pino.stdSerializers.err,
  },
  ...(isPretty && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
        messageFormat: "{msg}",
        hideObject: false,
        singleLine: false,
        useLevelLabels: true,
        levelFirst: true,
      },
    },
  }),
});

function createLoggerAdapter(pinoLogger: pino.Logger, prefixContext?: string) {
  const formatContext = (ctx?: string): string => {
    if (!ctx) return "";
    if (ctx.startsWith("[") && ctx.endsWith("]")) return ctx;
    return `[${ctx}]`;
  };

  const formattedContext = formatContext(prefixContext);

  return {
    info: (message: string, data?: object) => {
      const fullMessage = formattedContext ? `${formattedContext} ${message}` : message;
      data ? pinoLogger.info(data, fullMessage) : pinoLogger.info(fullMessage);
    },
    error: (message: string, data?: object) => {
      const fullMessage = formattedContext ? `${formattedContext} ${message}` : message;
      data ? pinoLogger.error(data, fullMessage) : pinoLogger.error(fullMessage);
    },
    warn: (message: string, data?: object) => {
      const fullMessage = formattedContext ? `${formattedContext} ${message}` : message;
      data ? pinoLogger.warn(data, fullMessage) : pinoLogger.warn(fullMessage);
    },
    debug: (message: string, data?: object) => {
      const fullMessage = formattedContext ? `${formattedContext} ${message}` : message;
      data ? pinoLogger.debug(data, fullMessage) : pinoLogger.debug(fullMessage);
    },
  };
}

export const logger = createLoggerAdapter(baseLogger);

export function createLoggerWithContext(context: string) {
  const childLogger = baseLogger.child({ context });
  return createLoggerAdapter(childLogger, context);
}

export default logger;
