import { useState, useEffect } from 'react';
import type { Session } from '../types/types.ts';

function useSessions() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await fetch('http://localhost:5173/sessions.json');
                if (!response.ok) {
                    throw new Error(`Error fetching sessions: ${response.statusText}`);
                }
                const data: Session[] = await response.json();
                setSessions(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }  
        };
        fetchSessions();
    }, []);
    return { sessions, loading, error };

}

export default useSessions;