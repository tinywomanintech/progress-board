import React from 'react';

export default function ProgressBoard() {
  return (
    <div className="board">
      <div style={{ display: 'flex', justifyContent: 'center', color: '#1A9DD8' }}>
        <h1>Progress Board</h1>
      </div>
      <div className="list-section">
        <ul className="lists">
          <li>1</li>
        </ul>
      </div>
    </div>
  );
}
