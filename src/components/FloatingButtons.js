import React from 'react';

function FloatingButtons() {
  const smoothScrollToTop = () => {
    const start = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start * (1 - easeInOutQuad));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      zIndex: 1100,
    }}>
      <button
        onClick={smoothScrollToTop}
        style={{
          backgroundColor: '#2B4228',
          color: 'white',
          border: '1px solid #ffffff3a',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize : '14px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
        aria-label="맨 위로 이동"
      >
        TOP
      </button>

      <a
        href="https://pf.kakao.com/_XxbFxdn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#ffeb3b',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          userSelect: 'none',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
        aria-label="카카오톡 채팅하기"
        title="카카오톡 채팅하기"
      >
        <img
          src="/images/talk.png"
          alt="카카오톡"
          style={{ width: '50px', height: '50px', objectFit: 'contain' }}
        />
      </a>
    </div>
  );
}

export default FloatingButtons;
