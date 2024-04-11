import React from 'react'

const Filter = ({ data }) => {
    return (
        <div className='bg-blue-500 py-3 text-cyan-50 text-center'>
            {
                data.map((item) => {
                    return (
                        <button className='mx-5 rounded-md hover:text-cyan-100 hover:bg-blue-950' key={item.id}>
                            {item.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter