import React from 'react';
import Terminal from './Terminal/Terminal';
import './App.css';

function App() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: '#0c0c0c', margin: 0, padding: 0, overflow: 'hidden' }}>
      <Terminal />
    </div>
  );
}

export default App;