import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyles from './styles/GlobalStyles';
import FeaturedGrid from './cards/FeaturedGrid';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Navbar />
        <Hero />
        <FeaturedGrid />
      </div>
    </>
  );
}

export default App; 