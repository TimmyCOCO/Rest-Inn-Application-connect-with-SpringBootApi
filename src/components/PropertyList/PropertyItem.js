import React from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from "react-icons/fa";

const PropertyItem = (props) => {

    return (
        <>  
            <div className="row">
                <div className="col-md-5" >

                    <img className="img-fluid rounded mb-4 mb-md-0" src={props.image} alt="img" />

                </div>

                <div className="col-md-6">

                    {/* check if this property is best seller */}
                    <h3 style={fontStyle}>{props.title}  <span className={props.isBestSeller ? "" : "hide"} style={{ color: "red"}}>
                        <FaStar />
                        <span style={{ fontSize: '18px' }}> Best Seller</span>
                    </span>

                    </h3>

                    <br />
                    <p><span style={spanStyle}>Price:</span> <span style={priceFont}>${props.price}</span></p>
                    <p><span style={spanStyle}>Type:</span> {props.type}</p>
                    <p><span style={spanStyle}>Location:</span> {props.location}</p>
                    <br />
                    <Link to={`/PropertyDesc/${props.id}`} className="btn btn-info" >View Description</Link>

                </div>
            </div>

            <hr />
        </>

    )
}

const spanStyle={
    fontWeight: 'bold'
}

const fontStyle = {
    fontFamily: "'Fredoka', sans-serif",
}

const priceFont={
    color: "red", 
    fontWeight: "bold",
    fontSize: '25px'
}

export default PropertyItem