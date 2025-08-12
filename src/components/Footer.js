import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background-color: #2B4228;
  color: white;
  padding: 40px 0;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 200;
`;

const FooterContainer = styled.div`
  max-width: 1245px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  margin-bottom: 20px;
`;

const FooterLogo = styled.div`
  img {
    height: 50px;
  }
`;

const FooterNav = styled.nav`
  width: 345px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.726);
  margin-bottom: 10px;
  display: flex;
  gap: 25px;

  a {
    color: white;
    text-decoration: none;
    font-size: 15px;

    &:hover {
      font-weight: 500;
    }
  }
`;

const FooterInfo = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.726);

  a {
    text-decoration: none;
    color: white;
  }

  p {
    margin: 4px 0;
  }
`;

const FtInfo01 = styled.div`
  display: flex;
  gap: 70px;
`;

const FtInfo02 = styled.div`
  display: flex;
  gap: 40px;
`;

const FooterBottom = styled.div`
  margin-top: 20px;

  img {
    height: 20px;
    margin-left: 10px;
    vertical-align: middle;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>

        <FooterTop>
          <FooterLogo>
            <img src="/images/logo_white.png" alt="모들담 로고" />
          </FooterLogo>
        </FooterTop>

        <FooterNav>
          <a href="/">회사소개</a>
          <a href="/">이용약관</a>
          <a href="/">개인정보처리방침</a>
          <a href="/">이용안내</a>
        </FooterNav>

        <FooterInfo>
          <FtInfo01>
            <p><strong>상호명</strong> | 모들담 제주담</p>
            <p><strong>대표자명</strong> | 김서희</p>
          </FtInfo01>
          <p><strong>사업장 주소</strong> | 63095 제주특별자치도 제주시 월랑북길 33(노형동) 모들담 제주담</p>
          <FtInfo02>
            <p><strong>대표전화</strong> | 010-2619-1909</p>
            <p><strong>사업자 등록번호</strong> | 875-06-01007</p>
          </FtInfo02>
          <p><strong>통신판매업 신고번호</strong> | 2024-제주노형-0238 <strong>[사업자정보확인]</strong></p>
          <p><strong>개인정보보호책임자</strong> | 김서희 <a href="mailto:modeuldamsoap@naver.com">modeuldamsaop@naver.com</a></p>
        </FooterInfo>

        <FooterBottom>
          <span>SNS | </span>
          <a href="https://www.instagram.com/modeuldamsoap/" target="_blank" rel="noopener noreferrer">
            <img src="/images/insta.png" alt="Instagram" />
          </a>
          <a href="https://pf.kakao.com/_XxbFxdn" target="_blank" rel="noopener noreferrer">
            <img src="/images/kakao.png" alt="KakaoTalk" />
          </a>
          <a href="https://blog.naver.com/modeuldam_jeju" target="_blank" rel="noopener noreferrer">
            <img src="/images/blog.png" alt="Blog" />
          </a>
        </FooterBottom>

      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
