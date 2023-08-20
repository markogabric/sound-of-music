import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyles from './styles/GlobalStyles';
import FeaturedGrid from './cards/FeaturedGrid';
import Footer from './components/Footer';
import Testimonail from './components/Testimonail';
import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './auth/AuthDetails';
import Filter from './Filter';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';

function App() {

  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/product" element={<ProductPage />} />
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