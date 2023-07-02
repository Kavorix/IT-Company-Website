import React from 'react'

const ServiceCard = ({ data }) => {
    const { icon, title, desc } = data
    return (
        <div className='bg-white p-4 text-center shadow-md max-[768px]:w-full w-[300px] flex flex-col gap-2'>
            <div className='w-20 h-20 mx-auto'>
                {icon}
            </div>
            <h3 className='text-2xl font-semibold text-gray-700'>{title}</h3>
            <p className='text-gray-500'>{desc}</p>
        </div>
    )
}

export default ServiceCard