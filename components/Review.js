import React from 'react'
import Rating from './Rating'

function Review({name , content , date , rating}) {
    return (
        <div className='border px-4 py-4 mt-4 mx-4 rounded-lg'>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <Rating number={rating} />
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <span>{date}</span></p></footer>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400 text-justify">{content}</p>
            </article>
        </div>
    )
}

export default Review