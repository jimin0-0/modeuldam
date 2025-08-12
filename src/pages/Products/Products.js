import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import FloatingButtons from '../../components/FloatingButtons';
import productsData from '../../data/products.json';

function Products() {
  const [sortType, setSortType] = useState('');

  const getSortedProducts = () => {
    switch(sortType) {
      case 'new':
        return [...productsData].sort((a, b) => b.id - a.id);
      case 'name':
        return [...productsData].sort((a, b) => a.name.localeCompare(b.name));
      case 'review':
        return [...productsData].sort((a, b) => b.reviewCount - a.reviewCount);
      case 'low':
        return [...productsData].sort((a, b) => a.price - b.price);
      case 'high':
        return [...productsData].sort((a, b) => b.price - a.price);
      default:
        return productsData;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <>
      <div style={{ maxWidth: '1245px', margin: '60px auto' }}>
        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '50px' }}>약초 비누</h2>
        <div style={{display:'flex', alignItems :'center', justifyContent:'space-between'}}>
          <p style={{ textAlign: 'left', marginBottom: '30px' }}>
            총 {productsData.length}개의 상품이 있습니다.
          </p>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              style={{ padding: '5px 10px', border: '1px solid #ccc', fontSize : '14px' }}
            >
              <option value="">- 정렬방식 -</option>
              <option value="">기본순</option>
              <option value="new">신상품</option>
              <option value="name">상품명</option>
              <option value="review">사용후기</option>
              <option value="low">낮은 가격순</option>
              <option value="high">높은 가격순</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '15px',
          }}
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>


        <div style={{ textAlign: 'center', margin: '40px 0', display:'flex', justifyContent :'center', marginBottom : '100px' }}>
          <button style={{ margin: '0 10px' , background :'none', border :'none', color:'#999' }}>{'<<'}</button>
          <button style={{ margin: '0 10px' , background :'none', border :'none', color:'#999' }}>{'<'}</button>
          <span style={{ margin: '0 10px', display:'block', width: '25px', border :'1px solid #ccc', cursor:'pointer' }}>1</span>
          <button style={{ margin: '0 10px', background :'none', border :'none', color:'#999'  }}>{'>'}</button>
          <button style={{ margin: '0 10px', background :'none', border :'none', color:'#999'  }}>{'>>'}</button>
        </div>
      </div>

      <FloatingButtons />
    </>
  );
}

export default Products;
