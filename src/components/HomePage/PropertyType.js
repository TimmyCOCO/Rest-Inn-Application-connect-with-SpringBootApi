import React from 'react'
import { Link } from 'react-router-dom'

const PropertyType = (props) => {
    return (

        <div style={divStyle}>
            <p style={fontStyle}>{props.type}</p>
            <Link to={`/PropertyType/${props.type}`}>
                <img src={props.image} style={imgStyle}
                    alt='type_picture' />
            </Link>

        </div>
       
    )
}

// CSS
const divStyle = {
    float: 'left',
    width: '25%',
    padding: 10,
    textAlign: 'center'
}

const fontStyle = {
    paddingTop: 20,
    fontFamily: "'Redressed', cursive",
    fontSize: 30
}

const imgStyle = {
    width: '80%',
    borderRadius: '50%',
}


export default PropertyType