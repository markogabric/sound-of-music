import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaPlay, FaWindowClose } from 'react-icons/fa';

import image from "../images/cover_image.jpg"
import ResponsiveVideoEmbed from "../helpers/ResponsiveVideoEmbed";
import ReactModalAdapter from "../helpers/ReactModalAdapter";
import { Link } from "react-router-dom";

const Container = tw.div`relative flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-10 md:py-12`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw(Link)`font-bold flex items-center justify-center px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

function Hero() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    const description = "Doživite potpuni zvučni užitak s Bose QuietComfort 35 slušalicama - nevjerojatan zvuk, bez ometanja.";
    const watchVideoYoutubeUrl = "https://www.youtube.com/embed/qPx4_GuHI4w";

    return (
        <>
            <Container>
                <LeftColumn>
                    <Heading>Bose QuietComfort 35<HighlightedText>Dostupne sada!</HighlightedText></Heading>
                    <Paragraph>{description}</Paragraph>
                    <Actions>
                        <PrimaryButton to="/products/1006">Naruči odmah</PrimaryButton>
                        <WatchVideoButton onClick={toggleModal}>
                            <span className="playIconContainer">
                                <FaPlay className="stroke-1 w-8 h-8 ml-4" />
                            </span>
                            <span className="playText">Pogledaj video</span>
                        </WatchVideoButton>
                    </Actions>
                </LeftColumn>
                <RightColumn>
                    <IllustrationContainer>
                        <img src={image} alt="Cover" className="rounded-[2.5rem]" />
                    </IllustrationContainer>
                </RightColumn>
                <StyledModal
                    closeTimeoutMS={300}
                    className="mainHeroModal"
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <CloseModalButton onClick={toggleModal}>
                        <FaWindowClose tw="w-6 h-6" />
                    </CloseModalButton>
                    <div className="content">
                        <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
                    </div>
                </StyledModal>
            </Container>
        </>
    )
}

export default Hero;