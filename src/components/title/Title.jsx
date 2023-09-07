import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div className='text-center max-[768px]:w-10/12 w-5/12  mx-auto'>
            <h2 className='text-5xl mb-3 text-gray-700'>
                {title}
            </h2>
            <p className='text-gray-500'>
                {desc}
            </p>
        </div>
    )
}

export default Title