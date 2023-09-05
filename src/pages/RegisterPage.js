import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaHeadphones, FaEnvelope } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

const Container = tw.div`relative min-h-screen bg-primary-800 text-white font-medium flex justify-center -mx-8`;
const Content = tw.div`max-w-screen-md m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div` p-6 sm:p-12`;
const LogoLink = tw.a`flex flex-row justify-center`;
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

function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const clearAllInputs = () => {
      setEmail("")
      setPassword("")
      setRepeatedPassword("")
    }

    const handleSignup = (e) => {
      e.preventDefault()

      if(!email || !password || !repeatedPassword){
        setErrorMessage("Niste unijeli sve podatke!")
        clearAllInputs()
        return
      }

      if(password !== repeatedPassword) {
        setErrorMessage("Pogrešno unesena lozinka!")
        clearAllInputs()
        return
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then()
      })
      .catch((err) => {
        clearAllInputs()
        switch (err.code) {
          case 'auth/email-already-in-use':
            setErrorMessage("E-mail adresa se već koristi!")
            break
          case 'auth/invalid-email':
            setErrorMessage("Pogrešno unesena e-mail adresa!")
            break
          case 'auth/weak-password':
            setErrorMessage("Lozinka je prekratka!")
            break
          default:
            setErrorMessage("Registracija neuspješna! Molimo provjerite Vaše podatke i pokušajte ponovno.")
        }        
      })
    }

    return(
    <Container>
      <Content>
        <MainContainer>
          <LogoLink>
            <FaHeadphones className="text-primary-800 w-20 h-20"/>
          </LogoLink>
          <MainContent>
            <Heading>Registracija</Heading>
            <FormContainer>
              <Form>
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Input type="password" placeholder="Lozinka" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <Input type="password" placeholder="Ponovite lozinku" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)}/>
                <p className="mt-8 text-red-600 text-center">{errorMessage}</p>
                <SubmitButton onClick={handleSignup}>
                  <FaEnvelope className="icon" />
                  <span className="text">Registriraj se</span>
                </SubmitButton>
              </Form>
              <p className="mt-8 text-gray-600 text-center">
                Već imate račun?{" "}
                <a className="border-b border-gray-500 border-dotted">
                  Prijavi se!
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
)
};

export default RegisterPage
