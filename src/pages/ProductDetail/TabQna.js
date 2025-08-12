import React from 'react';
import { FaLock } from 'react-icons/fa'; 

function TabQna() {
  const qna = [
    { id: 5, title: '제품문의', author: '윤***', date: '2025-07-29', views: 2, isReply: false },
    { id: 4, title: '제품문의', author: '이***', date: '2025-06-26', views: 2, isReply: true },
    { id: 3, title: '제품문의', author: '박***', date: '2025-05-15', views: 3, isReply: false },
    { id:2, title: '제품문의', author: '정***', date: '2025-05-05', views: 4, isReply: true },
    { id: 1, title: '제품문의', author: '최***', date: '2025-04-20', views: 4, isReply: false },
  ];

  return (
    <div className="tab-qna">
      <div className="review-title">
        <h3>Q&amp;A</h3>
        <a className="review-write" href="#">작성하기</a>
      </div>

      <div className="review-table">
        <div className="review-row review-header">
          <div className="col no">번호</div>
          <div className="col title">제목</div>
          <div className="col author">작성자</div>
          <div className="col date">작성일</div>
          <div className="col views">조회</div>
        </div>

        {qna.map((r) => (
          <div className="review-row" key={r.id}>
            <div className="col no">{r.id}</div>
            <div className="col title title2">
              {r.isReply && <span className="reply-badge">RE</span>}
              <FaLock style={{ marginRight: '6px', color: '#555' }} />
              {r.title}
            </div>
            <div className="col author">{r.author}</div>
            <div className="col date">{r.date}</div>
            <div className="col views">{r.views}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">{'<<'}</button>
        <button className="page-btn">{'<'}</button>
        <div style={{ display: 'flex', gap: '0', margin: '0 15px' }}>
          <span className="page-number">1</span>
        </div>
        <button className="page-btn">{'>'}</button>
        <button className="page-btn">{'>>'}</button>
      </div>
    </div>
  );
}

export default TabQna;
