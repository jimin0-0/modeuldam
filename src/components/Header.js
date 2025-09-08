import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setSearchOpen(prev => !prev);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const onSearchContentClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <>
      <div style={{
        width: '100%',
        backgroundColor: '#2B4228',
        color: 'white',
        textAlign: 'center',
        padding: '6px 0',
        fontSize: '14px',
        userSelect: 'none',
      }}>
        카카오톡 · 네이버 간편가입 시 2,000원 할인 즉시 지급
      </div>

      <Navbar expand="lg" className="bg-white border-bottom py-3">
        <Container className="nav-wrapper">

          <Navbar.Brand as={Link} to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="로고"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Navbar.Brand>

          <Nav className="mx-auto header-nav" style={{ gap: '40px' }}>
            <Nav.Link as={Link} to="/brandstory">브랜드 스토리</Nav.Link>
            <Nav.Link as={Link} to="/products">온라인 스토어</Nav.Link>
            <Nav.Link as={Link} to="/reviews">사용후기</Nav.Link>
            <Nav.Link as={Link} to="/notice">모들담 소식</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center" style={{ gap: '20px' }} title="검색하기">
            <button 
              onClick={toggleSearch} 
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: '#333'
              }}
              aria-label="검색창 열기/닫기"
            >
              <FiSearch size={22} />
            </button>

            <div style={{ cursor: 'pointer' }} title="찜하기">
              <FiHeart size={22} />
            </div>
            <div style={{ cursor: 'pointer'  }} title="마이페이지">
              <FiUser size={22} />
            </div>
            <div style={{ cursor: 'pointer'  }} title="장바구니">
              <FiShoppingBag size={22} />
            </div>
          </div>
        </Container>
      </Navbar>

      {searchOpen && (
        <div
          onClick={closeSearch}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
        />
      )}

      <div
        onClick={onSearchContentClick}
        style={{
          position: 'fixed',
          top: searchOpen ? 0 : '-50vh', 
          left: 0,
          width: '100%',
          height: '50vh',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'all 0.3s',
          zIndex: 1050,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          padding: '0 20px',
        }}
      >
        <Container
          style={{
            maxWidth: '720px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '60px' }}>
            SEARCH
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '2px solid #333',
            width: '100%',
            paddingBottom: '5px',
          }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력하세요"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '18px',
                flexGrow: 1,
              }}
            />
            <FiSearch size={24} color="#333" style={{ cursor: 'pointer' }} />
          </div>
        </Container>
      </div>

      <style>{`
        .header-nav .nav-link {
          position: relative;
          color: #505050ff;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .header-nav .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          left: 50%;
          bottom: -6px;
          background-color: #2B4228;
          transition: all 0.3s ease;
          border-radius: 1px;
          transform: translateX(-50%);
        }
        .header-nav .nav-link:hover,
        .header-nav .nav-link:focus {
          color: #2B4228;
        }
        .header-nav .nav-link:hover::after,
        .header-nav .nav-link:focus::after {
          width: 70%;
        }
      `}</style>
    </>
  );
}

export default Header;
