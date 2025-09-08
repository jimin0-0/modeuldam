import React, { useState, useEffect } from 'react';
import FloatingButtons from '../components/FloatingButtons';

function Notice() {
  const [period, setPeriod] = useState('all');
  const [searchType, setSearchType] = useState('title');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
  }, [period, searchType, searchQuery]);

  const handleSearchClick = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <div className="review-container">
      <h2 className="review-title">공지사항</h2>

      <table className="review-table">
        <thead>
          <tr>
            <th style={{width:"5%"}}>번호</th>
            <th style={{width:"50%"}}>제목</th>
            <th style={{width:"15%"}}>작성자</th>
            <th style={{width:"15%"}}>작성일</th>
            <th style={{width:"10%"}}>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" style={{ textAlign: 'center', padding: '80px 0', color: '#999' }}>
              게시글이 없습니다.
            </td>
          </tr>
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
      </div>
        <FloatingButtons />
    </div>
  );
}

export default Notice;
