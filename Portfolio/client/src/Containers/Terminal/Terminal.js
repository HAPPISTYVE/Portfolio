import React, { useState, useRef, useEffect } from 'react';
import { handleCommand } from './CommandParser';
import './Terminal.css';

const Terminal = () => {
  const [output, setOutput] = useState([
    "Windows PowerShell",
    "Copyright (C) Microsoft Corporation. Tous droits réservés.",
    "",
    "Tapez 'help' pour afficher la liste des commandes, about  ou 'cv' pour consulter le CV de Styve."
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const currentLine = `C:\\Users\\HappiStyve> ${input}`;
    const newOutput = [...output, currentLine];
    
    handleCommand(input, setOutput, () => setOutput([]), newOutput);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [output]);

  return (
    <div className="desktop-container">
      <div className="window-container">
        {/* Barre de titre Windows PowerShell avec décalage */}
        <div className="window-titlebar">
          <div className="titlebar-left">
            <span className="titlebar-icon">>_</span>
            <span>Windows PowerShell</span>
          </div>
          <div className="titlebar-buttons">
            <span title="Réduire">&#x2015;</span>
            <span title="Agrandir">&#x25A2;</span>
            <span className="close" title="Fermer" onClick={() => window.location.reload()}>&#x2715;</span>
          </div>
        </div>

        {/* Contenu du Terminal */}
        <div className="terminal-body" onClick={() => document.getElementById('term-input')?.focus()}>
          {output.map((line, index) => (
            <div key={index} className="terminal-output">{line}</div>
          ))}
          <form className="terminal-input-area" onSubmit={handleSubmit}>
            <span className="prompt">C:\Users\HappiStyve&gt;&nbsp;</span>
            <input 
              id="term-input"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              autoFocus 
              spellCheck="false"
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;