import React from 'react'
import './Spinner.css'
const Spinner = () => {
    return (
        <div className='flex justify-center pt-20'>
            <div className='spinner'></div>
            <p>Loading...</p>
        </div>
    )
}

export default Spinner