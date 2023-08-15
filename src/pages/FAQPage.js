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
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const SubmitButton = tw(PrimaryButton)`inline-block mt-8`

function FAQ() {
  const faqs = [
    {
      question: "Which countries do you deliver to?",
      answer: "We currently offer delivery to all countries within Europe."
    },
    {
      question: "What is the estimated delivery time for my order?",
      answer: "Delivery times vary based on your location within Europe. Typically, orders are delivered within 3-7 business days."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a range of payment methods, including major credit cards, PayPal, and direct bank transfers for your convenience."
    },
    {
      question: "Can I track my order after it's been placed?",
      answer: "Yes, once your order has been shipped, you'll receive a tracking number via email. You can use this to track your package's journey."
    },
    {
      question: "What are the shipping charges for orders within Europe?",
      answer: "Shipping charges are calculated based on your location and the weight of your order. You'll see the shipping cost during the checkout process before payment."
    },
    {
      question: "What is your return policy?",
      answer: "We have a hassle-free 30-day return policy. If you're not satisfied with your purchase, you can return it for a refund or exchange within 30 days of receiving your order."
    },
    {
      question: "How do I initiate a return?",
      answer: "To initiate a return, simply contact our customer support within the return window. We'll guide you through the process and provide you with a return authorization."
    },
    {
      question: "Are there any items that cannot be returned?",
      answer: "Most items can be returned, but certain products like in-ear earbuds may have specific return restrictions. Check our return policy for more details."
    },
    {
      question: "Can I cancel my order after it's been placed?",
      answer: "If your order hasn't been shipped yet, you can contact our customer support to request a cancellation. If the order has already been shipped, you can initiate a return once you receive it."
    },
    {
      question: "Do you offer expedited shipping options?",
      answer: "Yes, we offer expedited shipping for an additional fee. During the checkout process, you'll have the option to choose your preferred shipping speed."
    }
  ];

  const description = "Here are some frequently asked questions about services. If you have a question that is not on this list, please feel free to contact us by filling out the support form down below."

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

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
              <Subheading>FAQ</Subheading>
              <Heading>Questions</Heading>
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
          <Heading>Submit you question here</Heading>
          <Form action="" method="">
            <Input type="email" name="email" placeholder="Your Email Address" />
            <Input type="text" name="name" placeholder="Full Name" />
            <Input type="text" name="subject" placeholder="Subject" />
            <Textarea name="message" placeholder="Your Message Here" />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormArea>
      </Content>
    </Container>
  );
};

export default FAQ
