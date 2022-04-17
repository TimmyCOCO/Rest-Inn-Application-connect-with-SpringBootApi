// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PropertyType from './PropertyType'

const TypeList = () => {
  // use static resource
  const [propertyTypes, setPropertyTypes] = useState([
    {
      "id": 1,
      "type": "Resort",
      "image": "https://i.ibb.co/qC0yrcm/resort.jpg"
    },
    {
      "id": 2,
      "type": "Apartment",
      "image": "https://i.ibb.co/sv4KL7H/apartment.jpg"
    },
    {
      "id": 3,
      "type": "Hotel",
      "image": "https://i.ibb.co/N6kLJ9x/hotel.jpg"
    },
    {
      "id": 4,
      "type": "Motel",
      "image": "https://i.ibb.co/ZTJTxZy/motel.jpg"
    }
  ])

  // load FakeAPI data
  // useEffect(() => {
  //     // fetch('https://fake-server-for-app.herokuapp.com/propertyType')
  //     //     .then(res => res.json())
  //     //     .then(json => {

  //     //         setPropertyTypes(json)
  //     //     })
  //     //     .catch(err => {
  //     //         console.log(`Error: ${err}`)
  //     //     })

  //     // using axios
  //     axios('https://fake-server-for-app.herokuapp.com/propertyType')
  //         .then(res => {
  //             setPropertyTypes(res.data)
  //         })
  //         .catch(err => {
  //             console.log(`Error: ${err}`)
  //         })
  // }, [])

  return (
    <div>
      {
        propertyTypes.map(property => (
          <PropertyType key={property.id} id={property.id}
            type={property.type}
            image={property.image} />
        ))
      }


    </div>
  )
}

export default TypeList