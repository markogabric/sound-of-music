import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyles from './styles/GlobalStyles';
import FeaturedGrid from './cards/FeaturedGrid';
import Footer from './components/Footer';
import Testimonail from './components/Review';
import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/FrontPage';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './auth/AuthDetails';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route exact path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route exact path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogPostPage/>} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
            //<Route path="/" element={<LandingPage />} />
/**
 *         <SignIn />
        <SignUp />
        <AuthDetails />
 */
export default App; 