import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PropertyItem from './PropertyItem'

const PropertyList = () => {
   const [propertyItem, setPropertyItem] = useState([{
      id: "",
      title: "",
      price: 0,
      type: "",
      location: "",
      image: "",
      isBestSeller: "false"
   }])

   // searching
   const [searchItem, setSearchItem] = useState("")


   // have no parameter got from URL, load all data
   useEffect(() => {
      const url = 'http://localhost:8080/entities?title=&type='

      // using axios
      axios(url)
         .then(res => {
            setPropertyItem(res.data)
         })
         .catch(err => {
            console.log(`Error ${err}`)
         })

   }, [])

   return (
      <div className="container">

         <h1 className="my-4">Property List
            {/* <small> - Our Choices For You</small> */}

         </h1>
         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="text" className="searchBox, form-control form-control-dark" placeholder="Search... (title or type)" 
            onChange={(event)=>{
               setSearchItem(event.target.value)
            }}
            />
         </form>

         <hr />

         {
            propertyItem.filter((val)=>{
               if(searchItem === ''){
                  // nothing input, get all items
                  return val
               }else if(val.type.toLowerCase().includes(searchItem.toLowerCase()) 
               || val.title.toLowerCase().includes(searchItem.toLowerCase())){
                  // search title or type
                  return val
               }
            }).map(item => (
               <PropertyItem key={item.id} id={item.id} image={item.image}
                  title={item.title} price={item.price} type={item.type} location={item.location}
                  isBestSeller={item.isBestSeller} />
            ))
         }

      </div >
   )
}

export default PropertyList