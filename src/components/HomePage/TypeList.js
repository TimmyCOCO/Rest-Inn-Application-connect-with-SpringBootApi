import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PropertyType from './PropertyType'

const TypeList = () => {
    const [propertyTypes, setPropertyTypes] = useState([{
        id: 0,
        propertyType: '',
        image: null
    }])

    // load FakeAPI data
    useEffect(() => {
        // fetch('https://fake-server-for-app.herokuapp.com/propertyType')
        //     .then(res => res.json())
        //     .then(json => {

        //         setPropertyTypes(json)
        //     })
        //     .catch(err => {
        //         console.log(`Error: ${err}`)
        //     })

        // using axios
        axios('https://fake-server-for-app.herokuapp.com/propertyType')
            .then(res => {
                setPropertyTypes(res.data)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    }, [])

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