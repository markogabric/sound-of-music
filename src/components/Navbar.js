import React from 'react'
import { Link } from "react-router-dom"
import tw from 'twin.macro';
import { FaHeadphones } from 'react-icons/fa';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pb-10
`;

export const LogoText = tw.h1`
ml-4
`

export const DesktopHeaderLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export const NavLinks = tw.div`inline-block`;
export const AuthLinks = tw.div`inline-block ml-6`;

const NavLink = tw.a`
text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = tw(NavLink)`
  flex items-center font-black border-b-0 text-2xl! ml-0!`;

const defaultLinks = [

]

/*const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    DesktopHeaderLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    DesktopHeaderLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    DesktopHeaderLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    DesktopHeaderLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};*/

function Navbar() {
  /*const collapseBreakpointCss = collapseBreakPointCssMap["lg"];*/

  return (
    <Header className="header-light">
      <DesktopHeaderLinks /*css={collapseBreakpointCss.DesktopHeaderLinks}*/>
        <Link to="/">
          <LogoLink href="/" className=" p-2">
            <FaHeadphones className="p-2 h-10 w-10 bg-primary-500 text-white" />
            <LogoText>Sound of Music</LogoText>
          </LogoLink>
        </Link>
        <NavLinks>
          <Link to="/products" >
            <NavLink>Proizvodi</NavLink>
          </Link>
          <Link to="/blog" >
            <NavLink>Blog</NavLink>
          </Link>
          <Link to="/about" >
            <NavLink>O Nama</NavLink>
          </Link>
          <Link to="/faq" >
            <NavLink>FAQ</NavLink>
          </Link>
          <AuthLinks>
            <Link to="/login">
              <NavLink>Prijava</NavLink>
            </Link>
            <Link to="/register">
              <PrimaryLink>Registracija</PrimaryLink>
            </Link>
          </AuthLinks>
        </NavLinks>
      </DesktopHeaderLinks>
    </Header>
  )
}

export default Navbar