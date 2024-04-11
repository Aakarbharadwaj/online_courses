import React from 'react'

const Filter = ({ data }) => {
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <button key={item.id}>
                            {item.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter