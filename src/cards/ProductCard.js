import React from 'react'
import { motion } from "framer-motion";
import tw from "twin.macro";
import { Link } from 'react-router-dom';

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500 truncate`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 truncate`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-2 my-2 rounded bg-primary-500 text-gray-100 hover:shadow-outline focus:outline-none transition duration-300`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4`;
const Card = tw(motion.a)`bg-white rounded block max-w-xs mx-auto sm:max-w-none sm:mx-0 min-w-[200px] min-h-[400px]`;

const ProductCard = ({ index = 0, product }) => {
  return (
    <CardContainer key={index}>
      <Link to={`/products/${product.id}`}>
        <Card className="group" href="/#">
          <img src={product.image_src} alt={product.title}></img>
          <CardText>
            <CardTitle>{product.title}</CardTitle>
            <CardContent>{product.description}</CardContent>
            <CardPrice>{product.price}</CardPrice>
            <PrimaryButton>Detalji</PrimaryButton>
          </CardText>
        </Card>
      </Link>
    </CardContainer>
  )
}

export default ProductCard;