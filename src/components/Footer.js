import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaHeadphones, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`

function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <FaHeadphones className="h-12 w-12 mr-4"/>
            <LogoText>Sound of Music</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Reviews</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <FaYoutube />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright {new Date().getFullYear()}, Treact Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer