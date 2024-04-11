import React from 'react'
import Card from './Card'
const Cards = ({ courses }) => {
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach(itemArray => {
            itemArray.forEach(allData => {
                allCourses.push(allData);
            })
        })
        return allCourses;
    }

    return (
        <div className='flex flex-wrap gap-12 justify-center mt-10'>
            {
                getCourses().map(courses => {
                    return (
                        <Card courses={courses} key={courses.id} />
                    )
                })
            }
        </div>
    )
}

export default Cards