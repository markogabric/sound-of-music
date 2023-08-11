import React, { useState } from "react";


function Filter() {
    const [filters, setFilters] = useState({
        manufacturer: [],
        type: [],
        bluetooth: false
    })
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!modalIsOpen);

    return (
        <div>Filter</div>
    )
}

export default Filter