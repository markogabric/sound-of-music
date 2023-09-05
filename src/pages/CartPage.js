import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { FaWindowClose} from "react-icons/fa";

const Container = tw.div`relative flex flex-col items-center mb-24`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-start md:gap-24`
const ContentWithPaddingXl = tw.div`max-w-screen-xl md:pb-10`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center sm:text-left lg:text-4xl xl:text-5xl`;
const PostsContainer = tw.div`text-left mt-4 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const RecentPost = tw(motion.a)`py-4 w-80 lg:w-128 sm:max-w-xl md:gap-4 mb-16 last:mb-0 sm:mb-0 flex md:justify-between mr-0`;
const Image = styled(motion.img)(props => [
    `background-image: url("${props.$imageSrc}");`,
    tw`h-56 w-96 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold`;
const AuthorName = tw.h6`font-semibold text-lg`;

const Delivery = styled.div`
  ${tw`w-full h-3/6 border-2 max-w-sm md:mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
`;

const DeliveryHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .continue {
    ${tw`text-primary-500 font-bold tracking-widest underline cursor-pointer`}
  }
`;

const DeliveryInfo = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const DeliveryAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const RounderPrimaryButton = tw.div`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`;

const RecentPostsContainer = styled.div`
  ${tw`my-24 lg:mt-16`}
  ${PostsContainer} {
    ${tw`flex flex-wrap items-center flex-col w-full`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div`mr-8`
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 my-8 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;


export default () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.data.cart.cart)
    const cartTotal = useSelector((state) => state.data.cart.cartTotal)
    const [total, setTotal] = useState(getTotalSum(cart))
    
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }
    console.log(cart)

    if(cart.length === 0) {
        return (
            <Container>
                <img className="w-64 h-64" src="https://i.imgur.com/3be3m10.png" alt="Empty cart"/>
                <Heading>Vaša košarica je prazna!</Heading>
                <Link to="/products">
                    <PrimaryButton>Vidi sve proizvode</PrimaryButton>
                </Link>
            </Container> 
        )
    }
    return (
        <Container>
            <Heading>Vaša košarica</Heading>
            <TwoColumn>
                <ContentWithPaddingXl>
                    <RecentPostsContainer>
                        <PostsContainer>
                            {cart && cart.map((product, index) => (                                
                                    <RecentPost key={index} className="group">
                                        <div className="flex flex-row gap-2">
                                            <Link to={`/products/${product.id}`}><Image $imageSrc={product.image_src} />
                                        </Link><PostTextContainer>
                                            <Title>{product.title}</Title>
                                            <AuthorName>{product.price}</AuthorName>
                                        </PostTextContainer> 
                                        </div>
                                        <FaWindowClose onClick={() => handleRemoveFromCart(product)} className="w-16 h-16 text-primary-500 cursor-pointer"/>
                                    </RecentPost>
                            ))}
                        </PostsContainer>
                    </RecentPostsContainer>
                </ContentWithPaddingXl>
                <Delivery>
                    <DeliveryHeader>
                        <span className="name">Ukupno</span>
                        <span className="price">€{cartTotal}</span>
                        <Link to="/products"><span className="continue">Nastavi kupovati?</span></Link>
                        
                    </DeliveryHeader>
                    <DeliveryInfo>
                        <span className="feature mainFeature">Izračun cijene</span>
                        <span className="feature">
                                Osnovica: €{Math.round(cartTotal/1.2*100)/100}
                            </span>
                            <span className="feature">
                                PDV: €{Math.round((cartTotal - cartTotal/1.2)*100)/100}
                            </span>
                            <span className="feature">
                                Dostava: €0
                            </span>
                    <DeliveryAction>
                        <Link to="/delivery">
                            <RounderPrimaryButton>Dostava</RounderPrimaryButton>
                        </Link>
                    </DeliveryAction>
                    </DeliveryInfo>                
                </Delivery>
            </TwoColumn>
        </Container>
    );
};

const getTotalSum = (cart) => {
    let totalSum = 0

    cart.map(item => {
        totalSum += parseInt(item["price"].replace(/[€,]/g, ''), 10)
    })

    return totalSum
}
