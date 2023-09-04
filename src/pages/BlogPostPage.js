import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import data from "../blogposts.json"
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const Container = tw.div`relative -mx-8 mt-0`;
const TwoColumn = tw.div`flex flex-col-reverse px-20`;
const LeftColumn = tw.div`lg:w-full lg:mx-8 py-8`;
const RightColumn = styled.div`
  ${tw`flex justify-center items-center`}
`;

const Content = tw.div`text-left mt-12 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none mb-8`;
const Paragraph = tw.p`my-4 lg:my-5 lg:my-4 sm:text-lg lg:text-base xl:text-lg leading-loose`;
const AuthorName = tw.p`text-secondary-100 text-sm`;

export default () => {
    const params = useParams()
    const post = data.posts.find(post => post["id"] === params.id)
    if (!post) return(<NotFoundPage />)

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <Content>
            <Heading>{getTitle(post.title)}</Heading>
            <AuthorName>{post.author_name}</AuthorName>
            <Paragraph>{post.description}</Paragraph>            
            {post.content.map(post => <Paragraph>{post}</Paragraph>)}
          </Content>
        </LeftColumn>
        <RightColumn>
            <img src={post.image_src} alt="Slika"/>
        </RightColumn>
      </TwoColumn>
    </Container>
  );
};

const getTitle = (title) => {
    const [prefix, sufix] = title.split(": ")
    return(
        <>
          {prefix}: 
          <wbr />
          <br />
          <span tw="text-primary-500">{sufix}</span>
        </>
      )
}
