import React from 'react'
import { Carousel } from 'react-bootstrap'

import promotion1 from '../images/promotion1.jpg'
import promotion2 from '../images/promotion2.jpg'
import promotion3 from '../images/promotion3.jpg'

const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={promotion1}
                    width={'100%'}
                    height={'70%'}
                    alt="promotion1"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={promotion2}
                    width={'100%'}
                    height={'70%'}
                    alt="promotion2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={promotion3}
                    width={'100%'}
                    height={'70%'}
                    alt="promotion3"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero