import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({ categories, currentSlug }) => {
    return (
        <div className='px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex flex-wrap items-start font-medium mx-5 md:mx-10'>
            {
                categories.map((cat, index) => <Category key={index} active={currentSlug === slug(cat)} link={`/categories/${slug(cat)}`} name={cat} />)
            }
        </div>
    )
}

export default Categories