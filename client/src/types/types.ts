type Session = {
sessionId: string, //ID in order to track the session
confidence: number, // Convention will be 0.92 UI will display it as a percentage
status: 'Active' | 'Failed' | 'Completed' | 'Intervened', // An operator will need to know at what part the AI session is at it would be good for metrics later on.
timeStart: number, // When it started in milliseconds
timeEnd?: number, // When the session was completed in milliseconds
latency: number // How long it takes before the AI responds in milliseconds
};

export type { Session }