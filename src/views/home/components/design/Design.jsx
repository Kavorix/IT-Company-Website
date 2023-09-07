import React, { useEffect } from 'react'
import { ReactComponent as Image } from '@src/assets/images/design.svg'
import axios from 'axios'
import Button from '@src/components/button/Button'

const Design = () => {

    const [design, setDesign] = React.useState()

    const getDesign = async () => {
        const response = await axios.get('/design')
        console.log(response.data)
        setDesign(response.data)
    }

    useEffect(() => {
        getDesign()
    }, [])


    return (
        <section className='container mx-auto max-[768px]:flex-col gap-3 mt-10 flex items-center'>
            <div className="w-6/12 h-auto max-[768px]:w-8/12">
                <Image className="w-full h-full" />
            </div>
            <div className="w-5/12 max-[768px]:w-10/12">
                <h2 className='text-4xl text-gray-700 font-bold'>
                    {design?.title}
                </h2>
                <p className='mt-6 text-gray-600'>
                    {design?.description}
                </p>
                <Button variant="primary" size="lg" rounded className="mt-6">
                    Learn More
                </Button>
            </div>
        </section>
    )
}

export default Design