import React from 'react'
import { ReactComponent as HeroImg } from '@src/assets/images/hero.svg'
import Button from '@src/components/button/Button'

const Hero = () => {
    return (
        <section className='bg-background h-[600px] flex items-center w-full'>
            <div className="container mx-auto flex max-[768px]:flex-col gap-12 items-center">

                <div className=" w-9/12 flex flex-col gap-4">
                    <h1 className='text-gray-600 text-8xl max-[768px]:text-4xl font-bold'>
                        Lessons and insights <span>
                            from 8 years
                        </span>
                    </h1>
                    <p className='text-gray-400'>
                        Where to grow your business as a photographer: site or social media?
                    </p>

                    <div>
                        <Button variant="primary" size={"md"} rounded>
                            Get started
                        </Button>
                    </div>

                </div>
                <div className=" w-3/12">
                    <HeroImg className="w-full max-[768px]:h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Hero