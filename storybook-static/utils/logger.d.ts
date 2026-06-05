/**
 * Development logger utility for hcm-ui-charts-widgets
 * Only logs in development mode to avoid console statements in production builds
 *
 * This logger helps developers using the component library identify configuration
 * issues and provides helpful debugging information during development.
 */
export declare const devLogger: {
    /**
     * Log warning messages for component validation and configuration issues
     * Only appears in development builds
     */
    warn: (message: string, ...args: any[]) => void;
    /**
     * Log informational messages for debugging
     * Only appears in development builds
     */
    log: (message: string, ...args: any[]) => void;
    /**
     * Log error messages for critical issues
     * Only appears in development builds
     */
    error: (message: string, ...args: any[]) => void;
    /**
     * Debug-level logging for detailed troubleshooting
     * Only appears in development builds
     */
    debug: (message: string, ...args: any[]) => void;
};
