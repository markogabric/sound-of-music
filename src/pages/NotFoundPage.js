import React from 'react'
import tw from "twin.macro";
import image from "../images/404_image.jpg"
import { Link } from 'react-router-dom';

const Message = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl mb-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 my-8 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center p-16">
      <img src={image} alt="404" className="rounded-[2.5rem] max-w-144" />
      <Message>Page Not Found.</Message>
      <Link to="/">
        <PrimaryButton as="a">Go Back</PrimaryButton>
      </Link>
    </div>
  )
}

export default NotFoundPage