import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { FaPaperclip } from 'react-icons/fa';  
import reviewData from '../data/review.json'; 
import FloatingButtons from '../components/FloatingButtons';

function ReviewList() {
  const [period, setPeriod] = useState('all'); 
  const [searchType, setSearchType] = useState('title');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredReviews, setFilteredReviews] = useState(reviewData);

  useEffect(() => {
    let filtered = reviewData;

    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      if (searchType === 'all') {
        filtered = filtered.filter((review) =>
          review.productName.toLowerCase().includes(term) ||
          review.writer.toLowerCase().includes(term) ||
          (review.title && review.title.toLowerCase().includes(term))
        );
      } else if (searchType === 'title') {
        filtered = filtered.filter((review) => review.title && review.title.toLowerCase().includes(term));
      } else if (searchType === 'writer') {
        filtered = filtered.filter((review) => review.writer && review.writer.toLowerCase().includes(term));
      } else if (searchType === 'productName') {
        filtered = filtered.filter((review) => review.productName && review.productName.toLowerCase().includes(term));
      }
    }

    setFilteredReviews(filtered);
  }, [searchType, searchQuery]);

  const handleSearchClick = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <div className="review-container">
      <h2 className="review-title">사용후기</h2>

      <table className="review-table">
        <thead>
          <tr>
            <th style={{width:"5%"}}>번호</th>
            <th style={{width:"15%"}}>상품정보</th>
            <th style={{width:"50%"}}>제목</th>
            <th style={{width:"15%"}}>작성자</th>
            <th style={{width:"15%"}}>평점</th>
          </tr>
        </thead>
        <tbody>
          {filteredReviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>
                <img className="pro-img" src={process.env.PUBLIC_URL + review.productImage} alt="상품" />
              </td>
              <td className="title-cell">
                <div className="rv-product-name">{review.productName}</div>
                <div className="review-title-line" style={{ display: 'flex', gap : '0' }}>
                  <span>{review.title}</span>
                  {review.image && (
                    <span
                      style={{ color: '#666', fontSize: '16px', display: 'flex', alignItems: 'center', marginLeft : '8px' }}
                      title="이미지 첨부됨"
                    >
                      <FaPaperclip />
                    </span>
                  )}
                </div>
              </td>
              <td>{review.writer}</td>
              <td>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={fullStar}
                    style={{ color: i < review.rating ? '#2B4228' : '#ccc', marginRight: '4px' }}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="search-filter-wrap">
        <div className="search-filters">
          <select value={period} onChange={(e) => setPeriod(e.target.value)} className="search-select">
            <option value="week">일주일</option>
            <option value="month">한달</option>
            <option value="threeMonths">세달</option>
            <option value="all">전체</option>
          </select>

          <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="search-select">
            <option value="title">제목</option>
            <option value="writer">작성자</option>
            <option value="productName">상품정보</option>
            <option value="all">전체</option>
          </select>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearchClick}>찾기</button>
        </div>
        <button className="write-btn">글쓰기</button>
      </div>

      <div className="pagination">
        <span className="page-btn">{'<<'}</span>
        <span className="page-btn">{'<'}</span>
        <span className="page-number active">1</span>
        <span className="page-btn">{'>'}</span>
        <span className="page-btn">{'>>'}</span>
      </div>

      <FloatingButtons />
    </div>
  );
}

export default ReviewList;
