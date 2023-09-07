import React from 'react'
import { ReactComponent as Brand } from '@src/assets/light-logo.svg'

const Footer = () => {

    const [email, setEmail] = React.useState('')

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        alert(email)
    }


    return (
        <section className='bg-tertiary p-10 mt-24'>
            <div className="container max-[768px]:flex-col gap-8 flex mx-auto">
                <div className="w-5/12">
                    <div className="flex flex-col gap-8">
                        <Brand />
                        <div className='text-white'>
                            <p>
                                Copyright © 2023 Nexcent ltd.
                            </p>
                            <p>
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-7/12 max-[768px]:w-10/12 flex gap-6">
                    <div className="w-3/12 max-[768px]:w-5/12">
                        <div className='text-white'>
                            <h3 className='text-xl font-semibold'>
                                Company
                            </h3>
                        </div>
                        <ul className='mt-4'>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    About Us
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Contact Us
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Careers
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Blogs
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12 max-[768px]:w-4/12">
                        <div className='text-white'>
                            <h3 className='text-xl font-semibold'>
                                Support
                            </h3>
                        </div>
                        <ul className='mt-4'>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Help & Support
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Terms & Conditions
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Status
                                </a>
                            </li>
                            <li className='text-white'>
                                <a href="#" className='hover:text-primary'>
                                    Pricing & Plans
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-6/12">
                        <div className='text-white'>
                            <h3 className='text-xl font-semibold'>
                                Stay up to date
                            </h3>
                        </div>
                        <div className='mt-4 flex '>
                            <input
                                className='w-full text-white outline-primary bg-gray-700 rounded py-2 px-4'
                                type="email"
                                placeholder='Your Email Address'
                                onChange={handleEmail}
                            />
                            <button onClick={handleSubmit} className='-ml-12 border-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer