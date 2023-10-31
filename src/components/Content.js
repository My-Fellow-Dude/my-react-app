import React, { useState } from 'react';

function Content() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="content">
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Hide Info' : 'Show Info'}
      </button>

      {showInfo && (
        <div>
          <h3>Dog Breeds</h3>
          <p>Learn about different dog breeds, their characteristics, and what makes them unique.</p>
        </div>
      )}
    </div>
  );
}

export default Content;
