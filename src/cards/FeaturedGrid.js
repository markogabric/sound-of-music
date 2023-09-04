import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import data from '../products.json';
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-10`;
const HeadingRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center sm:pr-8`;
const HeadingItems = tw.div`flex justify-between flex-col sm:flex-row `;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex justify-evenly flex-wrap pb-10`;
const PrimaryButton = tw(Link)`font-bold flex items-center justify-center px-8 lg:px-10 py-2 my-2 rounded bg-primary-500 text-gray-100 hover:shadow-outline focus:outline-none transition duration-300`;

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
                        <PrimaryButton to="/products">Vidi sve proizvode</PrimaryButton>
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