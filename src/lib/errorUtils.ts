// Unified error and logging utility

export function logInfo(message: string, ...args: unknown[]) {
  // Standardized info log
   
  console.info(`[OASIS] ${message}`, ...args);
}

export function logWarn(message: string, ...args: unknown[]) {
  // Standardized warning log
   
  console.warn(`[OASIS] ${message}`, ...args);
}

export function logError(message: string, ...args: unknown[]) {
  // Standardized error log
   
  console.error(`[OASIS] ${message}`, ...args);
}

export class OasisError extends Error {
  constructor(message: string) {
    super(`[OASIS] ${message}`);
    this.name = 'OasisError';
  }
}
