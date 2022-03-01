import React, { useEffect, useState } from 'react'

import { useParams, useNavigate, Link } from 'react-router-dom'

import PropertyTypeItem from './PropertyTypeItem'

const PropertyTypeList = () => {
    const [propertyItem, setPropertyItem] = useState([{
        id: 0,
        title: "",
        price: 0,
        type: "",
        location: "",
        img: "",
        isBestSeller: "false"
    }])

    const { type } = useParams()

    // for button to go back to the previous page
    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    // have parameter got from URL, load the specific data
    useEffect(() => {
        fetch(`http://localhost:2000/propertyList?type=${type}`)
            .then(res => res.json())
            .then(json => {
                setPropertyItem(json)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [])

    return (
        <div className="container">

            <h1 className="my-4">Property List
                <small> - {type}</small> <Link to="/PropertyList"><button className="btn btn-primary"> Display All</button></Link>
            </h1>

            <hr />

            {
                propertyItem.map(item => (
                    <PropertyTypeItem key={item.id} id={item.id} img={item.img}
                        title={item.title} price={item.price} type={item.type} location={item.location}
                        isBestSeller={item.isBestSeller} />
                ))
            }

            <button type="button" className="btn btn-dark" style={{ float: 'right' }}
                onClick={goBack}>Go Back</button>

        </div >
    )
}

export default PropertyTypeList