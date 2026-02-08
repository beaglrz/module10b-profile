/*Beatriz Galarza
Repo: https://github.com/beaglrz/module10b-profile*/ 

import { useState } from 'react';

function Profile({ name, occupation, funFact, extraDetail }) {
  const [showDetail, setShowDetail] = useState(false);

  function handleToggle() {
    setShowDetail(!showDetail);
  }

  return (
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ margin: '0', fontSize: '22px' }}>{name}</h1>
      <h2 style={{ margin: '0', fontSize: '16px', color: '#646262' }}>{occupation}</h2>
      <p style={{ margin: '14px', fontSize: '14px' }}><strong>Fun fact: </strong>{funFact}</p>

      <button
        onClick={handleToggle}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#fff200',
          cursor: 'pointer',
        }}
      >
        {showDetail ? 'Hide Detail' : 'Show Detail'}
      </button>

      {showDetail && <p style={{ marginTop: '14px', fontSize: '14px' }}>{extraDetail}</p>}
    </div>
  );
}

export default Profile;