import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandStory from './components/BrandStory';
import ReviewList from './components/ReviewList';
import Notice from './components/Notice';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brandstory" element={<BrandStory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
