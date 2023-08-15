import React from "react";
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-8 md:py-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumnLeft = tw(Column)`md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first`
const TextColumnRight  = tw(Column)`md:ml-12 lg:ml-16 md:order-last`
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw.div`text-4xl sm:text-5xl font-black tracking-wide text-center mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Subheading = tw.div`font-bold text-primary-500 mb-4 text-center lg:text-left`;
const Paragraph = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

export default function AboutUsPage() {
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <img src="https://i.imgur.com/EKpsMdB.jpg" alt="About us" className="shadow hidden lg:block rounded bg-center mt-16"/>
                </ImageColumn>
                <TextColumnLeft>
                    <TextContent>
                        <Subheading>About Us</Subheading>
                        <Heading>Our History</Heading>
                        <Paragraph>Welcome to our premier high-end headphone webshop, where a passion for superior sound quality and innovation has driven us since our inception. Established in 2010, we embarked on this journey with a vision to redefine the way people experience music and audio. Our founders, themselves audiophiles with a deep appreciation for fine craftsmanship, set out to curate a collection of headphones that embody the epitome of sonic excellence.</Paragraph>
                        <Paragraph>Over the years, our dedication to delivering exceptional audio experiences has guided us through milestones and challenges. We've collaborated with renowned audio engineers, partnered with leading technology manufacturers, and continuously evolved our offerings to stay at the forefront of the industry. From our humble beginnings to becoming a trusted name in high-end audio, our history is a testament to our commitment to quality, innovation, and customer satisfaction.</Paragraph>
                    </TextContent>
                </TextColumnLeft>
            </TwoColumn>
            <TwoColumn>
                <ImageColumn>
                    <img src="https://i.imgur.com/EKpsMdB.jpg" alt="About us" className="shadow hidden lg:block rounded bg-center mt-16"/>
                </ImageColumn>
                <TextColumnRight>
                    <TextContent>
                        <Heading>Our Goals</Heading>
                        <Paragraph>At Sound of Music, our goals are not just rooted in providing headphones; they are rooted in providing an unparalleled auditory journey. We aim to be more than just a marketplace - we're a destination for enthusiasts who demand nothing but the best. Our mission is to make the sublime world of high-end headphones accessible to everyone, transcending mere audio devices to become vessels of emotion, expression, and connection.</Paragraph>
                        <Paragraph>We understand that our customers are diverse, with unique preferences and needs. That's why our goal is to curate a meticulously chosen selection of headphones that cater to various tastes and lifestyles. Whether you're an audiophile seeking the purest audio fidelity or a fashion-forward individual who values both style and substance, we're dedicated to offering a range of headphones that align with your desires.</Paragraph>
                        <Paragraph>Beyond the products themselves, our commitment extends to creating an enriching shopping experience. We aspire to foster a community of audio enthusiasts who share insights, reviews, and knowledge, cultivating an environment where passion and expertise converge. With personalized customer support, detailed product information, and a seamless purchasing process, our goal is to make your journey with us as gratifying as the headphones you choose.</Paragraph>
                    </TextContent>
                </TextColumnRight>
            </TwoColumn>
        </Container>
    );
};
