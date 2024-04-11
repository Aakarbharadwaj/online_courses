import React from 'react'
import './Card.css'
const Card = ({courses}) => {
    return (
        <div className='card'>
            <img className='image' src={courses.image.url} />
            <div className='card-content '>
                <h3 className='my-4'>{courses.title}/-</h3>
                <p className='card-description'>{courses.description} <span >Read more</span></p>
            </div>
            <div className='button'>
                <button>Buy</button>
            </div>
        </div>
    )
}
export default Card;