import React from 'react'

const Statistics = ({ data }) => {
    return (
        <div className="flex gap-4">
            <h5 className='text-4xl'>
                {data?.data}
            </h5>
        </div>
    )
}

export default Statistics