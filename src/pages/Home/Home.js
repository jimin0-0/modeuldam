import React, { useState } from 'react';
import VisualMain from './VisualMain';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStar as emptyStar } from '@fortawesome/free-solid-svg-icons';
import Banner from './Banner';
import FloatingButtons from '../../components/FloatingButtons';
import ReviewModal from './ReviewModal';
import Review from "../../data/review.json";
import productsData from '../../data/products.json';
import './Home.css';
import Popup from './Popup';


function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={i <= rating ? fullStar : emptyStar}
        className="home-star-icon"
      />
    );
  }
  return <div className="home-rating-stars">{stars}</div>;
}

function ReviewCard({ review }) {
  return (
    <div className="home-review-card">
      <img src={review.image} alt={review.productName} className="home-review-main-img" />
      <div className="home-review-product-info">
        <img src={review.productImage} alt="제품 썸네일" className="home-review-product-img" />
        <div>
          <div className="home-review-product-name">{review.productName}</div>
          <div className="home-review-count">사용후기 {review.reviewCount}</div>
        </div>
      </div>
      <RatingStars rating={review.rating} />
      <p className="home-review-content">{review.content}</p>
      <div className="home-review-writer">{review.writer}</div>
    </div>
  );
}

function Home() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home">
      {showPopup && <Popup onClose={closePopup} />}
      <VisualMain />

      <section className="home-best-products">
        <h2>BEST 상품</h2>
        <p>─ 약초 비누로 피부의 편안함을 즐겨보세요</p>
        <div className="home-product-grid">
          {productsData.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        <div className="home-btn-wrap">
          <Link to="/products" className="home-btn-hover">전체보기</Link>
        </div>
      </section>

      {/* brand */}
      <section className="home-brand-story">
        <div className="home-brand-story-img">
          <img src="/images/brand.png" alt="브랜드 자연 이미지" />
        </div>
        <div className="home-brand-story-text">
          <p className="home-brand-subtitle">BRAND STORY</p>
          <p className="home-brand-title">피부에 담는 <strong>정직함</strong></p>
          <p className="home-brand-desc">
            모들담은 청정 제주에서 찾은 약초와 허브로<br />
            직접 만든 정성 가득한 천연 수제 비누입니다.<br /><br />
            천 번의 손 주걱질로 완성하는 전통 방식을 고집합니다.<br />
            자연의 힘을 믿기에, 성분 하나하나 정직하게 담았습니다.
          </p>
          <Link to="/about" className="home-brand-btn">브랜드 스토리 보러가기 &gt;</Link>
        </div>
      </section>

      {/* review */}
      <section className="home-review-section">
        <h2>고객 후기</h2>
        <p>─ 믿고 쓰는 이유, 고객님들이 말해요</p>
        <div className="home-review-grid">
          {Review.slice(0, 4).map((review) => (
            <div
              key={review.id}
              onClick={() => setSelectedReview(review)}
              className="home-review-item"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        <div className="home-btn-wrap">
          <Link to="/reviews" className="home-btn-hover">전체보기</Link>
        </div>
      </section>

      <Banner />
      <FloatingButtons />

      {selectedReview && (
        <ReviewModal review={selectedReview} onClose={() => setSelectedReview(null)} />
      )}
    </div>
  );
}

export default Home;
