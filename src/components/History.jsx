// src/components/History.js
import  { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div>
      <h2>Summary History</h2>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <p>
                <strong>Original:</strong> {item.content}
              </p>
              <p>
                <strong>Summary:</strong> {item.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
