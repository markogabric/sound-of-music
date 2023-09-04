import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw.div`font-bold text-primary-500 mb-4 text-center lg:text-left`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const Questions = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const FormArea = tw.div`py-8 text-center md:text-left`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`
const SubmitButton = tw.button`inline-block mt-8 w-full font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hover:bg-primary-700 focus:shadow-outline transition duration-300`;

const SubmitMessage = tw.p`w-full mt-4 font-light text-center text-primary-600`

function FAQ() {
    const faqs = [
        {
            question: "Kojim zemljama vršite dostavu?",
            answer: "Trenutno nudimo dostavu u sve zemlje unutar Europe."
        },
        {
            question: "Koliko je procijenjeno vrijeme dostave za moju narudžbu?",
            answer: "Vrijeme dostave varira ovisno o vašoj lokaciji unutar Europe. Uobičajeno, narudžbe se dostavljaju unutar 3-7 radnih dana."
        },
        {
            question: "Koje načine plaćanja prihvaćate?",
            answer: "Prihvaćamo niz načina plaćanja, uključujući poznate kreditne kartice, PayPal i direktni bankovni prijenos radi vaše praktičnosti."
        },
        {
            question: "Mogu li pratiti svoju narudžbu nakon što je naručena?",
            answer: "Da, nakon što vaša narudžba bude poslana, primit ćete broj za praćenje putem e-pošte. Možete koristiti taj broj za praćenje putovanja vašeg paketa."
        },
        {
            question: "Koliko iznose troškovi dostave?",
            answer: "Troškovi dostave se izračunavaju na temelju vaše lokacije i težine vaše narudžbe. Troškovi dostave bit će vidljivi tijekom postupka plaćanja prije uplate."
        },
        {
            question: "Koja je vaša politika povrata?",
            answer: "Imamo politiku povrata u roku od 30 dana bez pitanja. Ako niste zadovoljni svojom kupnjom, možete je vratiti radi povrata novca ili zamjene unutar 30 dana od primitka narudžbe."
        },
        {
            question: "Kako pokrenuti povrat?",
            answer: "Da biste pokrenuli povrat, jednostavno kontaktirajte našu korisničku podršku unutar razdoblja za povrat. Vodit ćemo vas kroz postupak i pružiti vam ovlaštenje za povrat."
        },
        {
            question: "Postoje li stavke koje se ne mogu vratiti?",
            answer: "Većina stavki se može vratiti, ali određeni proizvodi poput in-ear slušalica mogu imati određena ograničenja za povrat. Provjerite našu politiku povrata za više detalja."
        },
        {
            question: "Mogu li otkazati svoju narudžbu nakon što je naručena?",
            answer: "Ako vaša narudžba još nije poslana, možete kontaktirati našu korisničku podršku i zatražiti otkazivanje. Ako je narudžba već poslana, možete pokrenuti povrat čim je primite."
        },
        {
            question: "Nudite li mogućnosti ubrzanog slanja?",
            answer: "Da, nudimo ubrzanu dostavu uz dodatnu naknadu. Tijekom postupka plaćanja imat ćete mogućnost odabrati svoju željenu brzinu dostave."
        }
    ];
    

  const description = "Evo nekoliko često postavljanih pitanja o uslugama. Ako imate pitanje koje se ne nalazi na ovoj listi, slobodno nas kontaktirajte ispunjavanjem obrasca za podršku u nastavku."

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [subjectValue, setSubjectValue] = useState("")
  const [messageValue, setMessageValue] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()

    setEmailValue("")
    setNameValue("")
    setSubjectValue("")
    setMessageValue("")
    setIsMessageSubmitted(true)
  }

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex)
      setActiveQuestionIndex(null);
    else
      setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <img src="https://i.imgur.com/EKpsMdB.jpg" alt="Questions" className="shadow hidden lg:block rounded bg-center" />
          </Column>
          <Column>
            <FAQContent>
              <Heading>Pitanja</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <Questions
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <FaMinus /> : <FaPlus />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </Questions>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
        <FormArea>
          <Heading>Unesite svoje pitanje ovdje</Heading>
          <Form onSubmit={handleSubmit} action="" method="">
            <Input type="email" name="email" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} placeholder="Vaš Email" />
            <Input type="text" name="name" value={nameValue} onChange={(event) => setNameValue(event.target.value)}  placeholder="Puno ime" />
            <Input type="text" name="subject" value={subjectValue} onChange={(event) => setSubjectValue(event.target.value)}  placeholder="Predmet" />
            <Textarea name="message" value={messageValue} onChange={(event) => setMessageValue(event.target.value)}  placeholder="Vaša poruka" />
            <SubmitButton>Pošalji</SubmitButton>
          </Form>
          {isMessageSubmitted && <SubmitMessage>Vaša poruka je poslana, odgovoriti ćemo Vam na vašu e-mail adresu u što kraćem roku!</SubmitMessage>}
        </FormArea>
      </Content>
    </Container>
  );
};

export default FAQ
