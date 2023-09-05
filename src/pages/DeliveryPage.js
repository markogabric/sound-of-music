import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { emptyCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex flex-col sm:flex-row gap-8`;
const Column = tw.div``;

const FAQContent = tw.div`lg:ml-12`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const OptionsContainer = tw.dl`mt-12`;
const Options = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Option = tw.dt`flex justify-between items-center`;
const OptionText = tw.span`text-lg lg:text-xl font-semibold`;
const OptionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const FormArea = tw.div`py-8 text-center md:text-left`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw.button`inline-block mt-8 font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hover:bg-primary-700 focus:shadow-outline transition duration-300`;

const SubmitMessage = tw.p`w-full mt-4 font-light text-center text-primary-600`

function DeliveryPage() {
    const dispatch = useDispatch()
    const deliveryOptions = [
        {
            title: "Hrvatska pošta",
            description: "Procjenjeno vrijeme dostave 3-5 dana. Dostava na otoke se može produljiti za 2-3 dana."
        },
        {
            title: "Overseas Express",
            description: "Procjenjeno vrijeme dostave 2-3 dana. Dostava na otoke se može produljiti za 1-2 dana."
        },
        {
            title: "DPD",
            description: "Procjenjeno vrijeme dostave 1-2 dana. Dostava na otoke se može produljiti za 1-2 dana."
        },
        {
            title: "Hrvatska pošta - Poštanski ured",
            description: "Preuzmite vaš paket u najbližem poštanskom uredu. Procjenjeno vrijeme dostave 1-3 dana. Dostava na otoke se može produljiti za 2-3 dana."
        }
    ];

    const paymentOptions = [
        {
            title: "Plaćanje prilikom preuzimanja/poduzećem",
            description: "Platite puni iznos vaše narudžbe dostavljaču prilikom dostave ili u poštanskom uredu tijekom preuzimanja."
        },
        {
            title: "Online plaćanje karticom",
            description: "Podržane vrste kartičnog plaćanja: Visa, MasterCard, AmericanExpress. Koristimo sigurnosni protokol 3D secure."
        },
        {
            title: "PayPal",
            description: "Platite vaše proizvode na siguran i brz način korištenjem online servisa PayPal."
        },
        {
            title: "Bankovni prijenos",
            description: "Nakon što vaša narudžba bude zaprimljena, poslat ćemo vam broj računa i poziv na broj. Narudžbu platite unaprijed na vaš račun."
        },
    ];

  const deliveryDescription = "Molimo odaberite dostavnu službu za vašu pošiljku:"
  const paymentDescription = "Molimo odaberite jednu od sljdećih načina plaćanja:"

  const [activeDeliveryIndex, setActiveDeliveryIndex] = useState(0);
  const [activePaymentIndex, setActivePaymentIndex] = useState(0);
  const [isDeliveryCompleted, setIsDeliveryCompleted] = useState(false);
  const [emailValue, setEmailValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [addressValue, setAddressValue] = useState("")
  const [cityValue, setCityValue] = useState("")
  const [countryValue, setCountryValue] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    window.scrollTo(0, 0);
    if(!emailValue || !nameValue || !phoneValue || !addressValue || !cityValue || !countryValue) {
        setErrorMessage("Niste unijeli sve obavezne podatke!")
        return
    }
    setErrorMessage()
    setIsDeliveryCompleted(true)
    dispatch(emptyCart())
  }

  const toggleDelivery = deliveryIndex => {
    setActiveDeliveryIndex(deliveryIndex);
  };

  const togglePayment = paymentIndex => {
    setActivePaymentIndex(paymentIndex);
  };

  if(isDeliveryCompleted) {
    return (
    <Container className="flex flex-col items-center mb-20">
        <Heading>Vaša pošiljka je na putu!</Heading>
        <img className="sm:w-1/3" src="https://img.freepik.com/free-vector/transit-warehouse-abstract-concept-vector-illustration-bonded-warehouse-goods-transfer-transportation-business-shipping-terminal-international-logistics-import-export-abstract-metaphor_335657-1741.jpg?w=2000" alt="Pošiljka poslana" />
        <Link to="/"><SubmitButton>Natrag na početnu</SubmitButton></Link>
    </Container>)
  }

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12">
          <FAQContent>
              <Heading>Dostava</Heading>
              <Description>{deliveryDescription}</Description>
              <OptionsContainer>
                {deliveryOptions.map((option, index) => (
                  <Options
                    key={index}
                    onClick={() => {
                      toggleDelivery(index);
                    }}
                    className="group"
                  >
                    <Option>
                      <OptionText>{option.title}</OptionText>
                      <OptionToggleIcon>
                        {activeDeliveryIndex === index ? <FaCheckCircle /> : <FaCircle />}
                      </OptionToggleIcon>
                    </Option>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeDeliveryIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {option.description}
                    </Answer>
                  </Options>
                ))}
              </OptionsContainer>
            </FAQContent>
          </Column>
          <Column>
            <FAQContent>
              <Heading>Plaćanje</Heading>
              <Description>{paymentDescription}</Description>
              <OptionsContainer>
                {paymentOptions.map((option, index) => (
                  <Options
                    key={index}
                    onClick={() => {
                      togglePayment(index);
                    }}
                    className="group"
                  >
                    <Option>
                      <OptionText>{option.title}</OptionText>
                      <OptionToggleIcon>
                        {activePaymentIndex === index ? <FaCheckCircle /> : <FaCircle />}
                      </OptionToggleIcon>
                    </Option>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activePaymentIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {option.description}
                    </Answer>
                  </Options>
                ))}
              </OptionsContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
        <FormArea>
          <Heading>Unesite svoje podatke ovdje</Heading>
          <Form onSubmit={handleSubmit} action="" method="">
            <Input type="email" name="email" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} placeholder="Vaš Email" />
            <Input type="text" name="name" value={nameValue} onChange={(event) => setNameValue(event.target.value)}  placeholder="Puno ime" />
            <Input type="text" name="phone" value={phoneValue} onChange={(event) => setPhoneValue(event.target.value)}  placeholder="Broj telefona" />
            <Input type="text" name="address" value={addressValue} onChange={(event) => setAddressValue(event.target.value)}  placeholder="Kućna adresa" />
            <Input type="text" name="city" value={cityValue} onChange={(event) => setCityValue(event.target.value)}  placeholder="Grad" />
            <Input type="text" name="country" value={countryValue} onChange={(event) => setCountryValue(event.target.value)}  placeholder="Država" />
            <SubmitButton>Završi narudžbu</SubmitButton>
          </Form>
          {errorMessage && <SubmitMessage>{errorMessage}</SubmitMessage>}
        </FormArea>
      </Content>
    </Container>
  );
};

export default DeliveryPage
