import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaHeadphones, FaEnvelope } from 'react-icons/fa';

const Container = tw.div`relative min-h-screen bg-primary-800 text-white font-medium flex justify-center -mx-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div` p-6 sm:p-12`;
const LogoLink = tw.a`flex flex-row justify-center`;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`-mt-4 text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  headingText = "Sign In To Treact",
  socialButtons = [
    {
      text: "Sign In With Google",
      url: "https://google.com"
    },
    {
      text: "Sign In With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Sign In",
  forgotPasswordUrl = "#",
  signupUrl = "#",

}) => (
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <FaHeadphones className="text-primary-800 w-20 h-20"/>
          </LogoLink>
          <MainContent>
            <Heading>Registracija</Heading>
            <FormContainer>
              <Form>
                <Input type="text" placeholder="Korisničko ime" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Lozinka" />
                <SubmitButton>
                  <FaEnvelope className="icon" />
                  <span className="text">Prijavi se</span>
                </SubmitButton>
              </Form>
              <p className="mt-8 text-gray-600 text-center">
                Već imate račun?{" "}
                <a href={signupUrl} className="border-b border-gray-500 border-dotted">
                  Prijavite se!
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
);
