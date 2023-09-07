import React, { useEffect } from 'react'
import axios from 'axios'
import visionImg from '@src/assets/images/vision.svg'

const Vision = () => {
    const [data, setData] = React.useState([])

    const getData = async () => {
        const response = await axios.get('/vision')
        console.log(response)
        setData(response.data)
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <section className='container mx-auto flex max-[768px]:flex-col items-center'>
            <div className='w-6/12 max-[768px]:w-10/12'>
                <img className='w-full' src={visionImg} alt="" />
            </div>
            <div className='w-5/12 max-[768px]:w-10/12 flex flex-col gap-4 '>
                <h2 className='text-4xl text-gray-700 font-semibold'>
                    {data.title}
                </h2>
                <p className='text-gray-500'>
                    {data.description}
                </p>
            </div>
        </section>
    )
}

export default Vision