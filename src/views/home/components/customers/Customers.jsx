import React, { useEffect } from 'react'
import Image from '@src/assets/images/customer.png'
import axios from 'axios'
import Button from '../../../../components/button/Button'
import { ReactComponent as ArrowICon } from '@src/assets/images/Right.svg'

const Customers = () => {

    const [customers, setCustomers] = React.useState()

    const getCustomers = async () => {
        const response = await axios.get('/customers')
        console.log(response.data)
        setCustomers(response.data)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <section className='bg-secondary mt-12'>
            <div className="container mx-auto py-20 flex items-center gap-8">
                <div className="w-4/12">
                    <img src={Image} className='w-full' alt="" />
                </div>

                <div className="w-9/12">
                    <p className='text-lg text-gray-700'>
                        {customers?.description}
                    </p>
                    <h2 className='text-xl mt-2 text-primary font-semibold'>
                        {customers?.name}
                    </h2>
                    <p className='text-gray-400 mt-2'>
                        {customers?.position}
                    </p>
                    <div className='flex gap-5 items-center  mt-8'>
                        {customers?.all_customers?.map((item, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <img src={item.image} className='w-32 h-16 rounded object-cover' alt="" />
                            </div>
                        ))}
                        <div>
                            <Button variant={"default"} size={"lg"}>
                                Meet All Customers
                                <ArrowICon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers