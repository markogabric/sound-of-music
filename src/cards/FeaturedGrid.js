import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import data from '../products.json';
import ProductCard from "./ProductCard";

const Container = tw.div`relative`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-10`;
const HeadingRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center sm:pr-8`;
const HeadingItems = tw.div`flex justify-between flex-col sm:flex-row `;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex justify-evenly flex-wrap pb-10`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500 truncate`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 truncate`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-2 my-2 rounded bg-primary-500 text-gray-100 hover:shadow-outline focus:outline-none transition duration-300`;

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-10 md:px-6 lg:px-8`;
const Card = tw(motion.a)`bg-white rounded block max-w-xs mx-auto sm:max-w-none sm:mx-0 min-w-[200px] min-h-[400px]`;

function FeaturedGrid() {
    const tabs = getTabsFromProducts()
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingRow>
                    <HeadingItems>
                        <Heading>
                            Istaknuti proizvodi
                        </Heading>
                        <PrimaryButton>Vidi sve proizvode</PrimaryButton>
                    </HeadingItems>
                    <TabsControl>
                        {Object.keys(tabs).map((tabName, index) => (
                            <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                                {tabName}
                            </TabControl>
                        ))}
                    </TabsControl>
                </HeadingRow>
                {tabsKeys.map((tabKey, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            }
                        }}
                        transition={{ duration: 0.4 }}
                        initial={activeTab === tabKey ? "current" : "hidden"}
                        animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        {tabs[tabKey].map((card, index) => (
                            <ProductCard index={index} product={card} />
                        ))}
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
        </Container>
    )
}

const getTabsFromProducts = () => {
    const tabs = {}
    tabs["Slušalice"] = data.products.filter(product => product.category === "Headphones").slice(0, 4);
    tabs["Pojačala"] = data.products.filter(product => product.category === "Amplifiers").slice(0, 4);

    return tabs
}

export default FeaturedGrid