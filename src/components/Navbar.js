import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import tw from 'twin.macro';
import styled from "styled-components";
import { FaHeadphones, FaBars, FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pb-10
`;

const LogoText = tw.h1`
ml-4
`

const HeaderLinks = tw.nav`
  flex flex-col lg:flex-row flex-1 justify-between items-center gap-1
`;

const NavLinksContainer = styled.div`
  ${tw`md:flex`}
  ${props => !props.visible && tw`hidden`}
`

const NavLinks = styled.div`
${tw`inline-block flex md:flex-row flex-col justify-between gap-2 md:gap-1 items-center`}
`;

const AuthLinks = tw.div`inline-block my-4 gap-4 md:gap-0 md:ml-6 md:my-0 flex md:flex-row flex-col`;

const NavLink = tw.a`
my-2 text-sm mx-6 my-0
font-semibold tracking-wide transition duration-300 whitespace-nowrap
pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

const PrimaryLink = tw(NavLink)`
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = tw(NavLink)`
  flex items-center font-black border-b-0 text-2xl!`;

function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const dispatch = useDispatch()

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const user = useSelector((state) => state.data.user.user)

  useEffect(() => {
    setIsMenuVisible(false);
  }, [pathname]);

  const handleLogout = () => {
    dispatch(logOut())
    signOut(auth)
    navigate('/hey')
  }

  return (
    <Header className="header-light">
      <HeaderLinks>
        <div className="flex flex-row items-center">
          <Link to="/">
            <LogoLink href="/" className=" p-2">
              <FaHeadphones className="p-2 h-10 w-10 bg-primary-500 text-white" />
              <LogoText>Sound of Music</LogoText>
            </LogoLink>
          </Link>
          <FaBars className="w-8 h-8 md:hidden ml-2" onClick={() => setIsMenuVisible(!isMenuVisible)} />
        </div>
        <NavLinksContainer visible={isMenuVisible}>
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
              {!user && <Link to="/login">
                <NavLink>Prijava</NavLink>
              </Link>}
              {!user && <Link to="/register">
                <PrimaryLink>Registracija</PrimaryLink> 
              </Link>}
              {user && <Link>
                <NavLink  onClick={handleLogout}>Odjava</NavLink>
              </Link>}
            </AuthLinks>
            <Link to="/cart">
                <FaCartPlus className="my-3 w-8 h-8 self-start transition cursor-pointer duration-300 hover:text-primary-500"></FaCartPlus>
            </Link>
          </NavLinks>
        </NavLinksContainer>
      </HeaderLinks>
    </Header>
  )
}

export default Navbar