import React from 'react'
import Button from '@src/components/button/Button'
import { ReactComponent as ArrowIcon } from '@src/assets/images/Right.svg'



const BlogCard = ({ blog }) => {
    const { img, description } = blog
    return (
        <div className='bg-white rounded-lg shadow-lg relative'>
            <div>
                <img src={img} alt="" className='w-full h-96 object-cover rounded-t-lg' />
            </div>
            <div className="p-5 bg-white shadow-lg w-10/12 left-2/4 -translate-x-1/2 absolute bottom-[-30px] rounded">
                <p className='text-gray-600 text-center text-2xl mt-2'>
                    {description.slice(0, 54)}...
                </p>
                <div className='flex items-center justify-center mt-4'>
                    <Button variant="default" size="lg" rounded>
                        Read More
                        <ArrowIcon />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default BlogCard