import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams, useNavigate, Link } from 'react-router-dom'

import PropertyTypeItem from './PropertyTypeItem'

const PropertyTypeList = () => {
    const [propertyItem, setPropertyItem] = useState([{
        id: "",
        title: "",
        price: 0,
        type: "",
        location: "",
        image: "",
        isBestSeller: "false"
    }])

    const { type } = useParams()

    // for button to go back to the previous page
    const navigate = useNavigate()

    // have parameter got from URL, load the specific data
    useEffect(() => {
        // const url = `https://fake-server-for-app.herokuapp.com/propertyList?type=${type}`
        const url = `http://localhost:8080/entities?title=&type=${type}`

        // using axios
        axios(url)
            .then(res => {
                setPropertyItem(res.data)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [type])

    return (
        <div className="container">

            <h1 className="my-4">Property List
                <small> - {type}</small> <Link to="/PropertyList"><button className="btn btn-primary"> Display All</button></Link>
            </h1>

            <hr />

            {
                propertyItem.map(item => (
                    <PropertyTypeItem key={item.id} id={item.id} img={item.image}
                        title={item.title} price={item.price} type={item.type} location={item.location}
                        isBestSeller={item.isBestSeller} />
                ))
            }

            <button type="button" className="btn btn-dark" style={{ float: 'right' }}
                onClick={() => navigate(-1)}>Go Back</button>

        </div >
    )
}

export default PropertyTypeList