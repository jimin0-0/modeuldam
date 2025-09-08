// ReviewModal.js
import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background: white;
  width: 835px;
  height: 550px;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  position: relative;
`;

const Left = styled.div`
  flex: 1.5;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;     
    height: 100%;    
    object-fit: cover; 
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px 20px;
  overflow-y: auto;
  position: relative;
  color: #333;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #444;
  }
`;

const Stars = styled.div`
  color: #2B4228;
  font-size: 25px;
  margin-bottom: 15px;

  svg {
    margin-right: 4px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom : 15px;
  padding-bottom :5px;
  border-bottom : 1px solid #ddd;
`;

const Author = styled.div`
  font-size: 14px;
  color: #555;
`;

const Date = styled.div`
  color: #888;
  font-size: 13px;
`;

const ReviewText = styled.p`
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #eee;
  margin-bottom: 30px;
  cursor : pointer;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-right: 1px solid #eee;
  }
  span {
    font-size: 14px;
    color: #555;
  }
`;

const Comment = styled.div`
  margin-top: 20px;
`;

const CommentHeader = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 8px;
  color: #555;
`;

const CommentMeta = styled.div`
  font-size: 13px;
  color: #888;
  margin-bottom: 8px;
`;

const CommentBody = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #555;
  white-space: pre-wrap;
`;

const Comment_box = styled.div`
  position : relative;
`

const LoginTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
  margin-top : 10px;
`;

const WriteButton = styled.button`
  padding: 5px 20px;
  background: #f8f8f8ff;
  color: #555;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 3px;
  font-size: 13px;
  position : absolute;
  bottom : 15px;
  right : 10px;

  &:hover {
    background: #2B4228;
    color : white;
  }
`;

export default function ReviewModal({ review, onClose }) {
  if (!review) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <Left>
          <img src={process.env.PUBLIC_URL + review.image} alt={review.productName} />
        </Left>
        <Right>
          <CloseBtn onClick={onClose}>
            <IoClose />
          </CloseBtn>

          <Stars>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < review.rating ? "#2B4228" : "#ddd"} />
            ))}
          </Stars>

          <InfoRow>
            <Author>{review.writer}</Author>
            <Date>{review.date || "2025-07-28 14:20"}</Date>
          </InfoRow>
          <ReviewText>{review.content}</ReviewText>

          <ProductInfo>
            <img src={process.env.PUBLIC_URL + review.productImage} alt="상품 썸네일" />
            <span>{review.productName}</span>
          </ProductInfo>

          <Comment>
            <CommentHeader>댓글 1</CommentHeader>
            <CommentMeta><strong>모들담</strong> &nbsp; 2025-07-28 16:10</CommentMeta>
            <CommentBody>
              안녕하세요 고객님 모들담입니다.<br />
              소중한 리뷰 남겨주셔서 진심으로 감사드립니다.<br />
              앞으로도 진심을 담은 비누로<br />
              늘 믿고 찾을 수 있는 브랜드가 되겠습니다.
            </CommentBody>
          </Comment>

          <Comment_box>
            <LoginTextarea placeholder="로그인이 필요합니다." />
            <WriteButton>작성</WriteButton>
          </Comment_box>
        </Right>
      </ModalWrapper>
    </Overlay>
  );
}
