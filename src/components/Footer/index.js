"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../icons"
import Link from 'next/link';

const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <footer className='mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark'>
            <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>Interesting Stories | Updates | Guides</h3>
            <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
                © 2024 CodeNewBee. All rights reserved.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4'>
                <input type="email" placeholder="Enter your email" {...register("email", { required: true })}
                    className='w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1' />

                <input type="submit" className='bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5' />
            </form>
            <div className='flex items-center mt-8'>
                <a href="/" className="inline-block h-6 w-6 mr-4"><LinkedinIcon className={`hover:scale-125 transition-all ease duration-200`} /></a>
                <a href="/" className="inline-block h-6 w-6 mr-4"><TwitterIcon className={`hover:scale-125 transition-all ease duration-200`} /></a>
                <a href="/" className="inline-block h-6 w-6 mr-4"><GithubIcon className={`hover:scale-125 transition-all ease duration-200 fill-light dark:fill-dark`} /></a>
            </div>
            <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between'>
                <span className='text-center'>&copy; 2024 CodeNewBee. All rights reserved.</span>
                <Link href={"/sitemap.xml"} className='text-center underline my-4 md:my-0
                '>sitemap.xml</Link>
                <div className='text-center'>
                    Made with &hearts; by <a href="http://" className='underline'>CodeNewBee</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer