import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import data from './products.json';

const Actions = styled.div`
  ${tw`relative text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
`;


function Filter() {
    const [selectedRanges, setSelectedRanges] = useState({
        price: [0, Number.MAX_SAFE_INTEGER]
    })

    const [selectedFilters, setSelectedFilters] = useState({
        manufacturer: [],
        type: [],
        driver_type: [],
        bluetooth: [],
        connectivity: [],
        inputs: []
    })

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters({
            ...selectedFilters,
            [filterType]: selectedFilters[filterType].includes(value)
                ? selectedFilters[filterType].filter(product => product !== value)
                : [...selectedFilters[filterType], value]
        })
        console.log("!!!", selectedFilters)
    }

    const handleRangeChange = (event, rangeType, isMin) => {
        const value = event.target.value
        setSelectedRanges({
            ...selectedRanges,
            [rangeType]: isMin ?
                selectedRanges[rangeType] = [value, selectedRanges[rangeType][1]] :
                selectedRanges[rangeType] = [selectedRanges[rangeType][0], value]
        })
        console.log("!!! Selected ranges", selectedRanges)
    }

    const clearFiltesAndRanges = () => {
        setSelectedFilters({
            manufacturer: [],
            type: [],
            driver_type: [],
            bluetooth: [],
            connectivity: [],
            inputs: []
        })

        setSelectedRanges({
            price: [0, Number.MAX_SAFE_INTEGER]
        })
    }

    const allManufacturerOptions = [...new Set(data.products.map(product => product.manufacturer))]
    const allTypeOptions = [...new Set(data.products.map(product => product.type))]
    const allDriverTypeOptions = [...new Set(data.products.map(product => product.driver_type))]
    const allConnectivityOptions = [...new Set(data.products.map(product => product.connectivity))]
    const allInputOptions = [...new Set([].concat(...data.products.map(product => product.inputs)))]
    console.log("inputs", allInputOptions)
    const productsList = applyFilters(selectedFilters, selectedRanges)
    console.log("Selected filters: ", selectedFilters, selectedRanges)
    console.log("Filtered products: ", productsList)

    return (
        <div className="flex flex-col">
            Select Manufacturer
            {getAllOptionsForFilter("manufacturer").map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.manufacturer.includes(option)}
                        onChange={() => handleFilterChange("manufacturer", option)}>
                    </input>
                    {option} {productsList.filter(product => product["manufacturer"].includes(option)).length}
                </label>
            ))}
            Select Type
            {allTypeOptions.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.type.includes(option)}
                        onChange={() => handleFilterChange("type", option)}>
                    </input>
                    {option} {productsList.filter(product => product["type"].includes(option)).length}
                </label>
            ))}
            Select Driver Type
            {allDriverTypeOptions.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.driver_type.includes(option)}
                        onChange={() => handleFilterChange("driver_type", option)}>
                    </input>
                    {option} {/*productsList.filter(product => product["driver_type"].includes(option)).length*/}
                </label>
            ))}
            Select Connectivity
            {allConnectivityOptions.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.connectivity.includes(option)}
                        onChange={() => handleFilterChange("connectivity", option)}>
                    </input>
                    {option} ({/*productsList.filter(product => product["connectivity"].includes(option)).length*/})
                </label>
            ))}
            Select Connectivity
            {allConnectivityOptions.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.connectivity.includes(option)}
                        onChange={() => handleFilterChange("connectivity", option)}>
                    </input>
                    {option} ({/*productsList.filter(product => product["connectivity"].includes(option)).length*/})
                </label>
            ))}
            Select Input
            {allInputOptions.map(option => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedFilters.inputs.includes(option)}
                        onChange={() => handleFilterChange("inputs", option)}>
                    </input>
                    {option} ({/*productsList.filter(product => product["connectivity"].includes(option)).length*/})
                </label>
            ))}
            <Actions>
                <input
                    type="text"
                    value={selectedRanges["price"][0]}
                    onChange={(event) => handleRangeChange(event, "price", true)}
                    placeholder="Min Price" />
                <input
                    type="text"
                    value={selectedRanges["price"][1] === Number.MAX_SAFE_INTEGER ? "" : selectedRanges["price"][1]}
                    onChange={(event) => handleRangeChange(event, "price", false)}
                    placeholder="Max Price" />
            </Actions>
            <button onClick={clearFiltesAndRanges}>Clear All</button>
        </div>
    )
}

const getAllOptionsForFilter = (filterName) => {
    if (Array.isArray(data.products[filterName])) {
        return [...new Set([].concat(...data.products.map(product => product[filterName])))]
    } else {
        return [...new Set(data.products.map(product => product[filterName]))]
    }
}

const applyFilters = (filters, ranges) => {
    let filteredProducts = data.products.filter(product =>
        Object.entries(filters).every(([filterType, selectedOptions]) => {
            if (Array.isArray(product[filterType])) {
                return selectedOptions.length === 0 || selectedOptions.some(element => product[filterType].includes(element))
            } else {
                return selectedOptions.length === 0 || selectedOptions.includes(product[filterType])
            }
        }
        )
    )

    filteredProducts = filteredProducts.filter(product =>
        Object.entries(ranges).every(([rangeType, selectedRange]) => {
            let value = parseInt(product[rangeType].replace(/[$,]/g, ''), 10);
            //console.log(rangeType, selectedRange, value)
            return value >= selectedRange[0] && value <= selectedRange[1]
        }
        )
    )

    console.log("Filtered products ()", filteredProducts)

    return filteredProducts
}

const countNumberOfOccurrences = (filterName, value) => {
    let count = 0
    data.products.map(product => {
        if (product[filterName].includes(value))
            count++
    })

    return count
}

export default Filter