import React, { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { FaStar } from "react-icons/fa";

const PropertyDesc = () => {
    const [propertyDesc, setPropertyDesc] = useState({
        id: 0,
        title: "",
        desc: "",
        price: 0,
        type: "",
        rules: "",
        amenities: [],
        location: "",
        img: null,
        isBestSeller: false,
        mapSrc: ""
    })

    // for button to go back to the previous page
    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    // get id from the url
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:2000/propertyList/${id}`)
            .then(res => res.json())
            .then(json => {

                setPropertyDesc(json);
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }, [])

    return (
        // < !--Page Content-- >
        <div className="container">

            {/* <!-- Item Heading --> */}
            <h1 className="my-5" style={fontStyle}>
                <small className={propertyDesc.isBestSeller ? "" : "hide"} style={{ color: 'red' }}><FaStar /></small> {propertyDesc.title}

            </h1>


            {/* <!-- Item Row --> */}
            <div className="row">

                <div className="col-md-7">
                    <img className="img-fluid" src={propertyDesc.img} alt="" />
                </div>

                <div className="col-md-5">
                    <h4 className="my-2">Description
                        {/* embedded google map */}
                        <iframe src={propertyDesc.mapSrc} title="map_frame"
                            width="200" height="150" style={{ border: '0', float: 'right' }} allowFullScreen="" loading="lazy"></iframe>
                    </h4>

                    <p>{propertyDesc.desc}</p>
                    <hr />

                    <p><span style={spanStyle}>Price:</span> <span style={{ fontSize: '40px' }}>${propertyDesc.price}</span></p>

                    <p><span style={spanStyle}>Type:</span> {propertyDesc.type}</p>
                    <p><span style={spanStyle}>Location:</span> {propertyDesc.location}</p>

                    <span style={spanStyle}>Amenities:</span>
                    <ul >
                        {/* display each item in the array */}
                        {propertyDesc.amenities.map((amenity, index) => (

                            <li key={index}>{amenity}</li>

                        ))}
                    </ul>

                    <p><span style={spanStyle}>Rules:</span> {propertyDesc.rules}</p>
                </div>
            </div>


            <hr />



            <button type="button" className="btn btn-dark" style={{ float: 'right' }}
                onClick={goBack}>Go Back</button>


        </div >
    )
}

const fontStyle = {
    fontFamily: "'Libre Baskerville', serif",
}

const spanStyle = {
    fontWeight: 'bold'
}

export default PropertyDesc