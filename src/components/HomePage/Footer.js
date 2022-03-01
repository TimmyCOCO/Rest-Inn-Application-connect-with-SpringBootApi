import React from 'react'

const Footer = () => {
    return (


        <footer className="row row-cols-5 py-5 my-5 border-top"  style={divStyle}>

            <div className="col" style={{paddingLeft:100}}>
                <img style={imageStyle} src={'https://i.ibb.co/frxLqzs/logo.jpg'} />
                <p className="text-muted" style={{ fontWeight: 'bold' }}> ©2022 Rest-Tonight, Inc.</p>
            </div>

            <div className="col">
                <h5>Support</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Help Center</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Safety Information</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">COVID-19 Response</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Travel Restriction</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                </ul>
            </div>

            <div className="col">
                <h5>About Us</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Company</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our <span style={{ color: 'blue' }}>Facebook</span></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our <span style={{ color: 'blue' }}>Twitter</span></a></li>
                </ul>
            </div>

        </footer>

    )
}


// CSS
const imageStyle = {
    height: 100,
    width: 100,
    borderRadius: '50%',
    marginLeft: 40,
    marginBottom: 10
}

const divStyle = {
    width:'100%',
    height: '100%',
}



export default Footer