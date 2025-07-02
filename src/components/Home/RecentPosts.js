import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import React from 'react'
import BlogLayoutThree from '../Blog/BlogLayoutThree'

const RecentPosts = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col justify-center items-center'>
            <div className='w-full flex justify-between'>
                <h2 className='text-2xl md:text-4xl inline-block font-bold capitalize text-dark dark:text-light'>Recent Posts</h2>
                <Link
                    href={'/categories/all'}
                    className='inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg'
                >
                    view all
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
                {
                    sortedBlogs.slice(5, 11).map((blog, index) => {
                        return <article className='col-span-1' key={index}>
                            <BlogLayoutThree blog={blog} />
                        </article>
                    })
                }
            </div>
        </section>
    )
}

export default RecentPosts