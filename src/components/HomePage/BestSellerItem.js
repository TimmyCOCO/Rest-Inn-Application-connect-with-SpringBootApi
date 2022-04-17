import React from 'react'
import { Link } from 'react-router-dom'



const BestSellerItem = (props) => {
    return (
        <div style={divStyle} className="container">
            <div className="row ">
                <div className="card border-0 shadow ">
                    <Link to={`/PropertyDesc/${props.id}`}><img src={props.image} alt='bestseller' className="card-img-top" style={imgStyle} /></Link>
                    <div className="card-body text-center">
                        <h5 className="card-title mb-2"><span style={{ color: "red" }}>ONLY</span> ${props.price} CAD/night</h5>
                        <div className="card-text text-black-50">{props.location}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// CSS
const divStyle = {
    float: 'left',
    width: '33%',
    padding: '50px',
}

const imgStyle = {
    padding: '20px'
}

export default BestSellerItem 