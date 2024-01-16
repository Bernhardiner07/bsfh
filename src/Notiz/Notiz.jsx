import React, { useState } from 'react';

const Notiz = () => {
  // Zustand für die Liste der Notizen und die aktuell ausgewählte Notiz
  const [notizen, setNotizen] = useState([]);
  const [neueNotiz, setNeueNotiz] = useState({ title: '', content: '' });

  // Funktion zum Hinzufügen einer neuen Notiz
  const handleNeueNotiz = () => {
    setNotizen([...notizen, neueNotiz]);
    setNeueNotiz({ title: '', content: '' });
  };

  // JSX für die Notizenliste und das Formular für neue Notizen
  return (
    <div>
      <h1>Notizen</h1>
      <ul>
        {notizen.map((notiz, index) => (
          <li key={index}>
            <strong>{notiz.title}</strong>: {notiz.content}
          </li>
        ))}
      </ul>
      <div>
        <h2>Neue Notiz erstellen</h2>
        <label>
          Titel:
          <input
            type="text"
            value={neueNotiz.title}
            onChange={(e) => setNeueNotiz({ ...neueNotiz, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Inhalt:
          <textarea
            value={neueNotiz.content}
            onChange={(e) => setNeueNotiz({ ...neueNotiz, content: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleNeueNotiz}>Neue Notiz erstellen</button>
      </div>
    </div>
  );
};

export default Notiz;
