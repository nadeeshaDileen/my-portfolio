import "./PriceCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 20 000/=</p>
                <p>-3 Days -</p>
                <p>-3 Pages -</p>
                <p>- Featured -</p>
                <p>Responsive Design</p>
                <Link to ="/contact" className="button">PURCHASE NOW</Link>

            </div>

            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 30 000/=</p>
                <p>-2 Days -</p>
                <p>-2 Pages -</p>
                <p>- Featured -</p>
                <p>Responsive Design</p>
                <Link to ="/contact" className="button">PURCHASE NOW</Link>

            </div>

            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc">Rs 50 000/=</p>
                <p>-1 Days -</p>
                <p>-1 Pages -</p>
                <p>- Featured -</p>
                <p>Responsive Design</p>
                <Link to ="/contact" className="button">PURCHASE NOW</Link>

            </div>

        </div>
    </div>
  )
}

export default PriceCard