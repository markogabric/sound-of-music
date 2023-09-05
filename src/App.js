import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import FrontPage from './pages/FrontPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DeliveryPage from './pages/DeliveryPage';
import CartPage from './pages/CartPage';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLoading } from './features/userSlice';
import { auth } from './firebase';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const isLoading = useSelector((state) => state.data.user.isLoading);
  const user = useSelector((state) => state.data.user.user)

  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route exact path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route exact path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogPostPage/>} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/login" element={user ? <Navigate to="/"/> : <LoginPage />} />
            <Route path="/register" element={user ? <Navigate to="/"/>  : <RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/delivery" element={user ? <DeliveryPage /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
export default App; 