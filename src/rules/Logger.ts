enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  DIR,
}

export class Logger {
  static logLevel = import.meta.env.NODE_ENV === 'production' ? LogLevel.ERROR : LogLevel.DEBUG;

  static log(level: LogLevel, message: string, values?: unknown[]): void {
    if (level >= Logger.logLevel) {
      let logMethod;
      switch (level) {
        case LogLevel.ERROR:
          logMethod = console.error;
          break;
        case LogLevel.WARN:
          logMethod = console.warn;
          break;
        case LogLevel.INFO:
          logMethod = console.info;
          break;
        case LogLevel.DEBUG:
          logMethod = console.debug;
          break;
        case LogLevel.DIR:
          logMethod = console.dir;
          break;
        default:
          logMethod = console.log;
          break;
      }
      if (values) {
        logMethod(`[${LogLevel[level]}]: ${message}`, ...values);
      } else {
        logMethod(`[${LogLevel[level]}]: ${message}`);
      }
    }
  }

  public dir(message: string, ...values: unknown[]): void {
    Logger.log(LogLevel.DIR, message, values);
  }

  public debug(message: string, ...values: unknown[]): void {
    Logger.log(LogLevel.DEBUG, message, values);
  }

  public info(message: string, ...values: unknown[]): void {
    Logger.log(LogLevel.INFO, message, values);
  }

  public warn(message: string, ...values: unknown[]): void {
    Logger.log(LogLevel.WARN, message, values);
  }

  public error(message: string, ...values: unknown[]): void {
    Logger.log(LogLevel.ERROR, message, values);
  }
}
