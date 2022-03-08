import React, { useState, useEffect } from 'react'

import PropertyItem from './PropertyItem'

const PropertyList = () => {
   const [propertyItem, setPropertyItem] = useState([{
      id: 0,
      title: "",
      price: 0,
      type: "",
      location: "",
      img: "",
      isBestSeller: "false"
   }])


   // have no parameter got from URL, load all data
   useEffect(() => {
      fetch("https://fake-server-for-app.herokuapp.com/propertyList")
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
            <small> - Our Choices For You</small>
         </h1>

         <hr />

         {
            propertyItem.map(item => (
               <PropertyItem key={item.id} id={item.id} img={item.img}
                  title={item.title} price={item.price} type={item.type} location={item.location}
                  isBestSeller={item.isBestSeller} />
            ))
         }

      </div >
   )
}

export default PropertyList