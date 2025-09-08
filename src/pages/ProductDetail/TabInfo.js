import React from 'react';

function TabInfo() {
  return (
    <div className="tab-info">
      <img className='detail-image' src={process.env.PUBLIC_URL +"/images/detail1.jpg"} alt="상세페이지 이미지" />
      <img className='detail-image2' src={process.env.PUBLIC_URL +"/images/detail2.jpg"} alt="상세페이지 이미지" />
      <img className='detail-image' src={process.env.PUBLIC_URL +"/images/detail3.jpg"} alt="상세페이지 이미지" />
      <img className='detail-image' src={process.env.PUBLIC_URL +"/images/detail4.jpg"} alt="상세페이지 이미지" />
      <img className='detail-image' src={process.env.PUBLIC_URL +"/images/detail5.jpg"} alt="상세페이지 이미지" />
    </div>
  );
}

export default TabInfo;
