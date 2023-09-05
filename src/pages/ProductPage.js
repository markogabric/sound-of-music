import React from "react";
import tw from "twin.macro";
import data from "../products.json"
import { FaTruck, FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from './NotFoundPage';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Container = tw.div`relative flex flex-col items-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pt-20 md:pt-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 md:h-auto relative`;
const TextColumn = tw(Column)`md:w-7/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last`

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw.h5`font-bold text-primary-500 text-center md:text-left`;
const Manufacturer = tw.a` underline`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center mt-1 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PriceInfo = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Price = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const PriceAmount = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Delivery = tw.div`flex items-center font-medium text-primary-700`;
const Specifications = tw.div`flex flex-col items-start max-w-screen-xl lg:w-full my-20 select-none px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800`;
const SpecificationsHeader = tw.span`text-lg lg:text-xl font-semibold mb-3`;
const SpecificationsText = tw.span`flex flex-row items-center pointer-events-none text-sm sm:text-base leading-relaxed`

const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`;

export default () => {
    const dispatch = useDispatch()
    const params = useParams()
    const product = data.products.find(product => product["id"] === params.id)

    if(!product) return (<NotFoundPage />)
    const specs = getSpecifications(product)
    const cart = useSelector((state) => state.data.cart.cartList)
    const cartCount = useSelector((state) => state.data.cart.cartCount)

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        console.log(cart)
        console.log(cartCount)
    }

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <img src={product.image_src} alt="" />
                </ImageColumn>
                <TextColumn>
                    <TextContent>
                        <Subheading><Manufacturer>{product.manufacturer}</Manufacturer></Subheading>
                        <Heading>{product.title}</Heading>
                        <Description>{product.information}</Description>
                        <PriceInfo>
                            <Price>
                                <PriceAmount>{product.price}</PriceAmount>
                                <Delivery><FaTruck className="mr-2" />Besplatna dostava</Delivery>
                            </Price>
                        </PriceInfo>
                        <Link to="/cart">
                            <PrimaryButton onClick={handleAddToCart}>
                            Dodaj u košaricu
                        </PrimaryButton>
                        </Link>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
            <Specifications>
                <SpecificationsHeader>Specifications:</SpecificationsHeader>
                {Object.entries(specs).map(([key, value]) => (
                    <SpecificationsText>
                        <FaCheckCircle className="mr-4" />
                        <b>{key}</b>{": "}{value}
                    </SpecificationsText>
                ))}
            </Specifications>
        </Container>
    );
};

const getSpecifications = (product) => {
    const specs = {
        "Tip slušalica": product.type,
        "Impedancija": product.impedance,
        "Frekencijski raspon": product.frequency_response
    }

    if (product.category === "Headphones") {
        specs["Tip drivera"] = product.driver_type
        specs["Osjetljivost"] = product.sensitivity
        specs["Spojivost"] = product.connectivity
    } else if (product.category === "Amplifiers") {
        specs["DAC Čip"] = product.dac_chip
        specs["Ulazi"] = product.inputs
    }

    return specs
}