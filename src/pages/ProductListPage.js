import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCircle, FaCheckCircle, FaBars } from "react-icons/fa";
import ProductCard from "../cards/ProductCard";
import data from "../products.json"

const Container = tw.div`relative bg-primary-600 text-gray-100 -mx-8`;
const TwoColumn = tw.div`flex flex-col md:flex-row`
const Content = tw.div`relative py-10 px-10 flex flex-col`;
const HeaderContainer = tw.div`mt-0 w-full md:w-72 flex flex-row items-center justify-center my-3`;

const FiltersContainer = motion(tw.dd`mt-6 flex flex-col items-center text-gray-900 font-medium`)
const Filter = styled.div`
  ${tw`w-full bg-white rounded-lg shadow-sm px-6 my-8 flex flex-col justify-between mt-0`}
`;

const FilterHeader = tw.div`flex flex-col items-center justify-center py-4 lg:text-lg xl:text-xl font-bold uppercase tracking-wider`;
const FilterOptions = styled.ul`
  ${tw`flex-1 border-t -mx-6 pb-6 px-4 `}
  ${props => !props.visible && tw`hidden!`}
  .option {
    ${tw`flex items-start cursor-pointer mt-2 p-2 transition duration-300 hover:bg-gray-300`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-gray-600 tracking-wide ml-3`}
    }
  }
`;

const TabsControl = tw.div`flex flex-col w-full bg-white px-2 py-2 rounded my-6 mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)` bg-white w-full flex flex-wrap content-start justify-start pb-10 `;

const PriceInputs = styled.div`
  ${tw`relative flex flex-row w-full justify-center text-center mb-6`}
  input {
    ${tw`md:max-w-40 w-full pl-4 py-3 first:rounded-l-full text-black last:rounded-r-full border-2 font-medium transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
`;

const PrimaryButton = tw.button`font-bold w-full text-gray-600 lg:px-6 py-3 mr-6 ml-1 rounded bg-gray-100 hover:bg-gray-300  focus:outline-none transition duration-300`;

export default ({
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(true)
    const tabs = {
        "Headphones": "Slušalice",
        "Amplifiers": "Pojačala"
    }
    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

    const [selectedRanges, setSelectedRanges] = useState({
        price: [0, Number.MAX_SAFE_INTEGER]
    })

    const [selectedHeadphoneFilters, setSelectedHeadphoneFilters] = useState({
        manufacturer: [],
        type: [],
        driver_type: [],
        connectivity: []
    })

    const [selectedAmplifierFilters, setSelectedAmplifierFilters] = useState({
        manufacturer: [],
        type: [],
        dac_chip: [],
        inputs: []
    })

    const allFilters = {
        "Headphones": selectedHeadphoneFilters,
        "Amplifiers": selectedAmplifierFilters
    }

    const filterNames = {
        "manufacturer": "Proizvođač",
        "type": "Tip",
        "driver_type": "Tip drivera",
        "connectivity": "Spojivost",
        "inputs": "Ulazi",
        "dac_chip": "DAC Čip"
    }

    const handleFilterChange = (filterType, filterName, value) => {
        if (filterType === "Headphones") {
            setSelectedHeadphoneFilters({
                ...selectedHeadphoneFilters,
                [filterName]: selectedHeadphoneFilters[filterName].includes(value)
                    ? selectedHeadphoneFilters[filterName].filter(product => product !== value)
                    : [...selectedHeadphoneFilters[filterName], value]
            })
        } else if (filterType === "Amplifiers") {
            setSelectedAmplifierFilters({
                ...selectedAmplifierFilters,
                [filterName]: selectedAmplifierFilters[filterName].includes(value)
                    ? selectedAmplifierFilters[filterName].filter(product => product !== value)
                    : [...selectedAmplifierFilters[filterName], value]
            })
        }
    }

    const handleRangeChange = (event, rangeType, isMin) => {
        let value = event.target.value
        if (value === "") {
            value = isMin ? 0 : Number.MAX_SAFE_INTEGER
        }
        setSelectedRanges({
            ...selectedRanges,
            [rangeType]: isMin ?
                selectedRanges[rangeType] = [value, selectedRanges[rangeType][1]] :
                selectedRanges[rangeType] = [selectedRanges[rangeType][0], value]
        })
    }

    const clearFiltesAndRanges = () => {
        setSelectedHeadphoneFilters({
            manufacturer: [],
            type: [],
            driver_type: [],
            connectivity: []
        })

        setSelectedAmplifierFilters({
            manufacturer: [],
        type: [],
        dac_chip: [],
        inputs: []
        })

        setSelectedRanges({
            price: [0, Number.MAX_SAFE_INTEGER]
        })
    }

    const isOptionChecked = (filterType, filterName, value) => {
        return allFilters[filterType][filterName].includes(value)
    }

    const productsList = applyFilters(activeTab, allFilters, selectedRanges)

    return (
        <Container>
            <TwoColumn>
                <Content>
                    <TabsControl>
                            {Object.entries(tabs).map(([key, value]) => (
                                <TabControl key={value} active={activeTab === key} onClick={() => setActiveTab(key)}>
                                    {value}
                                </TabControl>
                            ))}
                        </TabsControl>
                        <PriceInputs>
                            <input
                                type="text"
                                value={selectedRanges["price"][0] === 0 ? "" : selectedRanges["price"][0]}
                                onChange={(event) => handleRangeChange(event, "price", true)}
                                placeholder="Min Cijena" />
                            <input
                                type="text"
                                value={selectedRanges["price"][1] === Number.MAX_SAFE_INTEGER ? "" : selectedRanges["price"][1]}
                                onChange={(event) => handleRangeChange(event, "price", false)}
                                placeholder="Max Cijena" />
                        </PriceInputs>
                    <HeaderContainer>
                    <PrimaryButton onClick={() => clearFiltesAndRanges()}>Poništi filtere</PrimaryButton>
                        <FaBars className="w-8 h-8" onClick={() => setIsMenuVisible(!isMenuVisible)} />
                    </HeaderContainer>
                    <FiltersContainer
                        variants={{
                            open: { opacity: 1, height: "auto", marginTop: "16px" },
                            collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                        }}
                        initial="collapsed"
                        animate={isMenuVisible ? "open" : "collapsed"}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        {Object.keys(activeTab === "Headphones" ? selectedHeadphoneFilters : selectedAmplifierFilters).map((filterName) => (
                            <Filter key={filterName}>
                                <FilterHeader>
                                    <span className="nameAndFeaturedContainer">
                                        <span className="name">{filterNames[filterName]}</span>
                                    </span>
                                </FilterHeader>
                                <FilterOptions visible={isMenuVisible}>
                                    {getAllOptionsForFilter(activeTab, filterName).map((option, index) => (
                                        <li className="option" key={index} onClick={() => handleFilterChange(activeTab, filterName, option)}>
                                            {(isOptionChecked(activeTab, filterName, option)) ? (<FaCheckCircle className="icon" />) : (<FaCircle className="icon" />)}
                                            <span className="text">{option} ({numOfOptionOccurances(productsList, activeTab, filterName, option)})</span>
                                        </li>
                                    ))}
                                </FilterOptions>
                            </Filter>
                        ))}
                    </FiltersContainer>
                </Content>
                <TabContent>
                    {productsList.map((card, index) => (
                        <ProductCard index={index} product={card} />
                    ))}
                </TabContent>
            </TwoColumn>

        </Container>
    );
}

const getAllOptionsForFilter = (filterType, filterName) => {
    const allOptions = data.products.filter(product => product["category"] === filterType).map(product => product[filterName])
    return filterName === "inputs" ? [...new Set([].concat(...allOptions.sort()))] : [...new Set(allOptions.sort())]
}

const numOfOptionOccurances = (productsList, filterType, filterName, value) => {
    return productsList.filter(product => product.category === filterType
        && (product[filterName].includes(value))).length
}

const applyFilters = (filterType, filters, ranges) => {
    let filteredProducts = data.products.filter(product =>
        Object.entries(filters[filterType]).every(([filterName, selectedOptions]) => {
            if (Array.isArray(product[filterName])) {
                return product["category"] === filterType && (selectedOptions.length === 0 || selectedOptions.some(element => product[filterName].includes(element)))
            } else {
                return product["category"] === filterType && (selectedOptions.length === 0 || selectedOptions.includes(product[filterName]))
            }
        }
        )
    )

    filteredProducts = filteredProducts.filter(product =>
        Object.entries(ranges).every(([rangeType, selectedRange]) => {
            let value = parseInt(product[rangeType].replace(/[$,]/g, ''), 10);
            return value >= selectedRange[0] && value <= selectedRange[1]
        }
        )
    )

    filteredProducts.sort((a, b) => {
        let productA = parseInt(a["price"].replace(/[$,]/g, ''), 10);
        let productB = parseInt(b["price"].replace(/[$,]/g, ''), 10);
        return (productA < productB) ? -1 : (productA > productB) ? 1 : 0;
    });

    return filteredProducts
}