import React from 'react';
import reviewData from '../../data/review.json';

function TabReview({ product }) {
  if (!product) return null;

  const filteredReviews = reviewData.filter(
    (r) => r.productName === product.name
  );

  return (
    <div className="tab-review">
      <div className="review-title">
        <h3>REVIEW</h3>
        <a className="review-write" href="#">작성하기</a>
      </div>

      <div className="review-table">
        <div className="review-row review-header">
          <div className="col no">번호</div>
          <div className="col title">제목</div>
          <div className="col author">작성자</div>
          <div className="col date">작성일</div>
          <div className="col views">조회</div>
          <div className="col rating">평점</div>
        </div>

        {filteredReviews.length === 0 ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>등록된 후기가 없습니다.</div>
        ) : (
          filteredReviews.map((r, index) => (
            <div className="review-row" key={r.id}>
              <div className="col no">{filteredReviews.length - index}</div>
              <div className="col title title2">{r.title}</div>
              <div className="col author">{r.writer}</div>
              <div className="col date">{r.date.split(' ')[0]}</div>
              <div className="col views">{r.views}</div>
              <div className="col rating">{'★'.repeat(r.rating)}</div>
            </div>
          ))
        )}
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

export default TabReview;
