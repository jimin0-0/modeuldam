import React, { useState } from 'react';

function Popup({ onClose }) {
  const [doNotShowToday, setDoNotShowToday] = useState(false);

  const handleToggleDoNotShow = () => {
    setDoNotShowToday(!doNotShowToday);
  };

  const handleClose = () => {
    if (doNotShowToday) {
      localStorage.setItem('hidePopupToday', 'true');
    }
    if (onClose) onClose();
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '115px',
        left: '200px',
        width: '460px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
        zIndex: '999',
      }}
    >
      <img
        src="/images/popup.jpg"
        alt="팝업"
        style={{ width: '100%', display: 'block' }}
      />

      <div
        style={{
          display: 'flex',
          borderTop: '1px solid #ddd',
          fontSize: '14px',
          color: '#555',
          height: '50px',
          lineHeight: '50px',
        }}
      >
        <div
          onClick={handleToggleDoNotShow}
          style={{
            flex: 1,
            textAlign: 'center',
            cursor: 'pointer',
            borderRight: '1px solid #ddd',
            color: '#333',
          }}
        >
          오늘 하루 열지 않기
        </div>

        <button
          onClick={handleClose}
          style={{
            flex: 1,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#333',
            fontSize: '14px',
            textAlign: 'center',
          }}
          type="button"
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default Popup;
