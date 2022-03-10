import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BestSellerItem from './BestSellerItem'

const Bestseller = () => {

  const [bestSellerItem, setBestSellerItem] = useState([{
    id: 0,
    location: '',
    price: 0,
    image: null
  }])

  useEffect(() => {
    // fetch("https://fake-server-for-app.herokuapp.com/bestSeller")
    //   .then(res => res.json())
    //   .then(json => {
    //     setBestSellerItem(json)
    //   })
    //   .catch(err => {
    //     console.log(`Error: ${err}`)
    //   })

    // using axios
    axios("https://fake-server-for-app.herokuapp.com/bestSeller")
      .then(res => {
        setBestSellerItem(res.data)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })

  }, [])

  return (
    <>
      {/* Top choice Image */}
      <div style={divStyle}>
        <img src={'https://i.ibb.co/M5VmYxG/A-red-inked-rubber-stamp-on-a-transparent-background-with-a-blobby-grunge-texture-AI10-EPS-CMYK-colo.jpg'}
          style={imgStyle} alt="top-choice" />
      </div>

      <div>
        {
          bestSellerItem.map(item => (
            <BestSellerItem key={item.id} id={item.id} image={item.image}
              location={item.location} price={item.price} />
          ))
        }
      </div>
    </>

  )
}

// CSS
const imgStyle = {
  height: '15%',
  width: '15%',
  marginRight: '30%',
}

const divStyle = {
  textAlign: 'center'
}

export default Bestseller