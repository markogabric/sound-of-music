import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";

import data from "../blogposts.json"
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto pb-10`;
const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-left lg:text-4xl xl:text-5xl`;
const PopularPostsContainer = tw.div`lg:text-left lg:w-2/3 text-center flex flex-col flex-wrap sm:flex-row sm:justify-between lg:justify-start items-start`;
const PostsContainer = tw.div`text-left mt-4 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const PopularPost = tw(motion.a)`w-full sm:w-1/2 block p-4 sm:max-w-sm cursor-pointer mb-16 `;
const RecentPost = tw(motion.a)`w-1/2 block py-4 sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`;
const Image = styled(motion.img)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-56 w-96 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex flex-col items-center lg:items-start`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`my-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  const postBackgroundSizeAnimation = {
    rest: {
      scale: "100%"
    },
    hover: {
      scale: "105%"
    }
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            {data.posts.map((post, index) => (
              <PopularPost key={index} className="group" initial="rest" whileHover="hover" animate="rest">
                <Link to={`/blog/${post.id}`} className="flex flex-col lg:items-start items-center">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    src={post.image_src}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorName>{post.author_name}</AuthorName>
                    <AuthorProfile>{post.author_info}</AuthorProfile>
                  </AuthorInfo>
                </Link>
              </PopularPost>
            ))}
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Najnoviji postovi</Heading>
            <PostsContainer>
              {data.recentPosts.map((post, index) => (
                <Link to={`/blog/${randomPostId()}`}>
                  <RecentPost key={index} href={post.url} className="group">
                  <PostTextContainer>
                    <Title>{post.title}</Title>
                    <AuthorName>{post.author}</AuthorName>
                  </PostTextContainer>
                  <Image $imageSrc={post.image_src} />
                </RecentPost>
                </Link>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};

const randomPostId = () => {
  const postIds = data.posts.map((post) => post.id).sort(() => Math.random() - 0.5);
  return postIds[0]
}
