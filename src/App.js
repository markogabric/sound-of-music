import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="text-center font-display p-8">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App; 