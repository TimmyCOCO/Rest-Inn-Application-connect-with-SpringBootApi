import React, { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { FaStar } from "react-icons/fa";

const PropertyDesc = () => {
    const [propertyDesc, setPropertyDesc] = useState({
        id: 0,
        title: "",
        description: "",
        price: 0,
        type: "",
        rules: "",
        amenities: "",
        location: "",
        image: "",
        isBestSeller: false,
        mapSrc: ""
    })

    // for button to go back to the previous page
    const navigate = useNavigate()

    // get id from the url
    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://fake-server-for-app.herokuapp.com/propertyList/${id}`)
        //     .then(res => res.json())
        //     .then(json => {

        //         setPropertyDesc(json);
        //     })
        //     .catch(err => {
        //         console.log(`Error ${err}`)
        //     })

        // const url =`https://fake-server-for-app.herokuapp.com/propertyList/${id}`
        const url = `http://localhost:8080/entities/${id}`

        // using axios
        axios(url)
            .then(res => {
                setPropertyDesc(res.data)
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
                    <img className="img-fluid" src={propertyDesc.image} alt="" />
                </div>

                <div className="col-md-5">
                    <h4 className="my-2">Description
                        {/* embedded google map */}
                        <iframe src={propertyDesc.mapSrc} title="map_frame"
                            width="200" height="150" style={{ border: '0', float: 'right' }} allowFullScreen="" loading="lazy"></iframe>
                    </h4>

                    <p>{propertyDesc.description}</p>
                    <hr />

                    <p><span style={spanStyle}>Price:</span> <span style={{ fontSize: '40px' }}>${propertyDesc.price}</span></p>

                    <p><span style={spanStyle}>Type:</span> {propertyDesc.type}</p>
                    <p><span style={spanStyle}>Location:</span> {propertyDesc.location}</p>

                    <p><span style={spanStyle}>Amenities:</span> {propertyDesc.amenities}</p>

                    {/* display each item in the array */}
                    {/* <ul >
                        
                        {propertyDesc.amenities.map((amenity, index) => (

                            <li key={index}>{amenity}</li>

                        ))}
                    </ul> */}

                    <p><span style={spanStyle}>Rules:</span> {propertyDesc.rules}</p>
                </div>
            </div>


            <hr />



            <button type="button" className="btn btn-dark" style={{ float: 'right' }}
                onClick={() => navigate(-1)}>Go Back</button>


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