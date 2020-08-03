import React from 'react'
import '../css/product.css'
import Main from '../images/product.png'
import Card from '../images/Card.png'

const Product = () => {
    return (
        <div className="product-wrapper">
            <div className="product-card">
                <img src={Main} alt="" />
                <img src={Card} alt="" />
            </div>
            <div className="product-content">
                <span>Our Product</span>
                <h2>You tell us your stress, <br />
                    We make your diary
                </h2>
                <p>Everyone experiences it, and in different ways,
                    Let Avilio guide you, in a personalized journal experience,
                    to overcome your stress.
                </p>
                <button>Find Your Way</button>
            </div>
        </div>
    )
}

export default Product
