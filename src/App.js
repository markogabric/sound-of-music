import './App.css';
import tw from 'twin.macro';

export const NavLinks = tw.div`inline-block`;

const NavLink = tw.a`
text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

function App() {
  return (
    <div className="text-center font-display">
      <NavLinks>
        <NavLink>Search</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact Us</NavLink>
      </NavLinks>
    </div>
  );
}

export default App;
