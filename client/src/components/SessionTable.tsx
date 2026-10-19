import type { Session } from "../types/types"

type SessionTableProps = {
    sessions: Session[];
}; 

const SessionTable = ({ sessions }: SessionTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Session ID</th>
                    <th>Confidence</th>
                    <th>Status</th>
                    <th>Time Start</th>
                    <th>Time End</th>
                    <th>Latency</th>
                </tr>
            </thead>
            <tbody>
                {sessions.map((session) => (
                    <tr key={session.sessionId}>
                        <td>{session.sessionId}</td>
                        <td>{session.confidence}</td>
                        <td>{session.status}</td>
                        <td>{session.timeStart}</td>
                        <td>{session.timeEnd}</td>
                        <td>{session.latency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SessionTable;