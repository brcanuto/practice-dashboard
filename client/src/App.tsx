import useSessions from './hooks/useSessions.ts';
import SessionTable from './components/SessionTable.tsx';

import './App.css'

function App() {
  const { sessions, loading, error } = useSessions();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <><div className="App">
      <header className="App-header">
        <h1>Welcome to the App</h1>
      </header>
    </div><SessionTable sessions={sessions} /></>
  );
}



export default App
