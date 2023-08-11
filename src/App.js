import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyles from './styles/GlobalStyles';
import FeaturedGrid from './cards/FeaturedGrid';
import Footer from './components/Footer';
import Testimonail from './components/Testimonail';
import FAQ from './components/FAQ';
import AboutUsPage from './pages/AboutUsPage';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './auth/AuthDetails';


function App() {
  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Navbar />
        <Hero />
        <FeaturedGrid />
        <Testimonail />
        <FAQ />
        <AboutUsPage />
        <Footer />
      </div>
    </>
  );
}

/**
 *         <SignIn />
        <SignUp />
        <AuthDetails />
 */
export default App; 