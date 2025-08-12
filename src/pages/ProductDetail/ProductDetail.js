import React, { useState } from 'react';
import './ProductDetail.css';
import TabInfo from './TabInfo';
import TabReview from './TabReview';
import TabQna from './TabQna';
import TabShipping from './TabShipping';
import FloatingButtons from '../../components/FloatingButtons';
import { useParams, Link } from 'react-router-dom';
import productsData from '../../data/products.json';

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productsData.find((item) => item.id === productId);

  const [activeTab, setActiveTab] = useState('tab-info');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  if (!product) {
    return <div className="not-found">상품 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="product-detail-container">

      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">모들담</Link> {' > '}
        <Link to="/products" className="breadcrumb-link">온라인 스토어</Link> {' > '}
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      <div className="product-detail-content">
        <div className="product-detail-left">
          <img src={product.image} alt={product.name} />
          <div className="product-thumbnails">
            <img src={product.image} alt="thumb1" />
            <img src="/images/pro_detail1.jpg" alt="thumb2" />
            <img src="/images/pro_detail2.jpg" alt="thumb3" />
            <img src="/images/pro_detail3.jpg" alt="thumb4" />
          </div>
        </div>

        <div className="product-detail-right">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-sub">{product.info}</p>
          <p className="product-desc">
            <strong>{product.name}가 전하는 깨끗한 클렌징</strong>
            <p className="pro-desc2">{product.description}</p>
          </p>

          <div className="price-box">
            <div className="customer-price">
              <p className="cp-name">소비자가</p>
              <del>{product.originalPrice.toLocaleString()}원</del>
            </div>
            <div className="sell-price">
              <p className="sp-name">판매가</p>
              <p className="price">{product.price.toLocaleString()}원</p>
            </div>
          </div>

          <div className="delivery-box">
            <p className="dv-name">배송</p>
            <p className="delivery">국내배송 / 배송비 무료</p>
          </div>

          <div className="product-options">
            <div className="option-box">
              <p className="option-name">개수</p>
              <select>
                <option>-- [필수] 옵션을 선택해주세요 --</option>
                {product.options && product.options.map((opt, idx) => (
                  <option key={idx}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="option-item">
              {product.name}
              <div className="qty-box">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <span className="item-total">{product.price.toLocaleString()}원</span>
              <button className="remove-btn">×</button>
            </div>
          </div>

          <div className="total-box">
            <p>TOTAL</p>
            <div className="total-price-box">
              <span className="total-price">{product.price.toLocaleString()}원</span>
              <span className="total-count">(1개)</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy">구매하기</button>
            <button className="cart">장바구니</button>
            <button className="like">관심상품</button>
          </div>
        </div>
      </div>

      <div className="product-tabs sticky-tab">
        <ul className="tab-menu">
          <li
            className={activeTab === 'tab-info' ? 'active' : ''}
            onClick={() => scrollToSection('tab-info')}
          >
            상세정보
          </li>
          <li
            className={activeTab === 'tab-review' ? 'active' : ''}
            onClick={() => scrollToSection('tab-review')}
          >
            상품후기
          </li>
          <li
            className={activeTab === 'tab-qna' ? 'active' : ''}
            onClick={() => scrollToSection('tab-qna')}
          >
            상품문의
          </li>
          <li
            className={activeTab === 'tab-shipping' ? 'active' : ''}
            onClick={() => scrollToSection('tab-shipping')}
          >
            배송/교환/환불 안내
          </li>
        </ul>
      </div>

      <div id="tab-info" className="tab-section">
        <TabInfo />
      </div>
      <div id="tab-review" className="tab-section">
        <TabReview product={product} />
      </div>
      <div id="tab-qna" className="tab-section">
        <TabQna product={product} />
      </div>
      <div id="tab-shipping" className="tab-section">
        <TabShipping />
      </div>

      <FloatingButtons />
    </div>
  );
}

export default ProductDetail;
