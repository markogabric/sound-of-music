import React from "react";
import tw from "twin.macro";

const Container = tw.div`relative`;
const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-20`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

function Testimonail() {
    const testimonials = [
        {
            imageSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
                "Incredible headphone variety and top-notch service! My go-to destination for all my audio needs.",
            customerName: "Jerry S."
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
            "Impressed with the swift delivery and premium headphone quality. This webshop definitely exceeded my expectations!",
            customerName: "George C."
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
            quote:
            "Exceptional shopping experience - the headphone collection is outstanding and the prices are unbeatable. Highly recommended.",
            customerName: "Cosmo K."
        }
    ]


    return (
        <Container>
            <ContentWithPaddingXl>
                <Heading>Customer <HighlightedText>Reviews</HighlightedText></Heading>
                <Testimonials>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialContainer key={index}>
                            <Testimonial>
                                <Quote>"{testimonial.quote}"</Quote>
                                <CustomerName>- {testimonial.customerName}</CustomerName>
                            </Testimonial>
                        </TestimonialContainer>
                    ))}
                </Testimonials>
            </ContentWithPaddingXl>
        </Container>
    )
}

export default Testimonail