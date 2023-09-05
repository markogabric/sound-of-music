import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaHeadphones, FaEnvelope } from 'react-icons/fa';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Container = tw.div`relative min-h-screen bg-primary-800 text-white font-medium flex justify-center -mx-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div` p-6 sm:p-12`;
const LogoLink = tw.a`flex flex-row justify-center`;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`-mt-4 text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

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

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const clearAllInputs = () => {
    setEmail("")
    setPassword("")
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setErrorMessage("Niste unijeli sve podatke!")
      clearAllInputs()
      return
    }

    signInWithEmailAndPassword(auth, email, password).then()
      .catch((err) => {
        clearAllInputs()
        switch (err.code) {
          case 'auth/user-not-found':
            setErrorMessage("E-mail adresa nije pronađena!")
            break
          case 'auth/invalid-email':
            setErrorMessage("Pogrešno unesena e-mail adresa!")
            break
          case 'auth/wrong-password':
            setErrorMessage("Pogrešno unesena lozinka!")
            break
          default:
            setErrorMessage("Prijava neuspješna! Molimo provjerite Vaše podatke i pokušajte ponovno.")
        }
      }
      )
  };

  return (
    <Container>
      <Content>
        <MainContainer>
          <LogoLink>
            <FaHeadphones className="text-primary-800 w-20 h-20" />
          </LogoLink>
          <MainContent>
            <Heading>Prijava</Heading>
            <FormContainer>
              <Form onSubmit={handleLogin}>
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="mt-8 text-red-600 text-center">{errorMessage}</p>
                <SubmitButton >
                  <FaEnvelope className="icon" />
                  <span className="text">Prijavi se</span>
                </SubmitButton >
              </Form>
              <p className="mt-8 text-gray-600 text-center">
                Nemate račun?{" "}
                <a className="border-b border-gray-500 border-dotted">
                  Registrirajte se!
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
};

export default LoginPage
