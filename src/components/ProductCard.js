import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return null;

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-card" style={{ textAlign: 'center', cursor: 'pointer' }}>
        <div
          className="image-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            overflow: 'hidden',
            border: '1px solid #eee',
            marginBottom: '10px',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s',
            }}
          />

          <div
            className="icon-overlay"
            style={{
              position: 'absolute',
              top:'auto',
              bottom: '10px',
              right: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              transition: 'opacity 0.3s ease',
              zIndex: 10,
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
              }}
              style={{
                background: 'white',
                borderRadius: '4px',
                padding: '8px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                color: liked ? '#E94D4D' : '#333',
                fontSize: '18px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="찜하기"
            >
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setAddedToCart(!addedToCart);
              }}
              style={{
                background: 'white',
                borderRadius: '4px',
                padding: '8px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                color: addedToCart ? '#52684fff' : '#333',
                fontSize: '18px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="장바구니 담기"
            >
              <FaShoppingBag />
            </button>
          </div>
        </div>

        <p style={{ fontSize: '16px', marginTop: '8px', marginBottom: '1px', textAlign: 'left' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'nowrap',
            }}
          >
            {product.name}
            {product.badge && (
              <span
                style={{
                  backgroundColor: '#E94D4D',
                  color: '#fff',
                  fontSize: '10px',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                {product.badge}
              </span>
            )}
          </span>
        </p>

        <p
          style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '1px',
            textAlign: 'left',
            fontWeight: '300',
          }}
        >
          {product.info}
        </p>

        <p
          style={{
            color: '#666',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ textDecoration: 'line-through' }}>
            {product.originalPrice?.toLocaleString()}원
          </span>
          <span style={{ color: '#2B4228', fontWeight: '700' }}>
            {product.price.toLocaleString()}원
          </span>
        </p>

        <p
          style={{
            color: '#999',
            fontSize: '13px',
            fontWeight: '300',
            textAlign: 'left',
            marginTop: '-15px',
          }}
        >
          사용후기{' '}
          <span
            style={{
              fontWeight: '600',
              color: '#666',
              marginLeft: '3px',
            }}
          >
            {product.reviewCount}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
