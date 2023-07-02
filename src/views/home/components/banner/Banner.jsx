import axios from 'axios'
import React, { useEffect } from 'react'
import { ReactComponent as MembersICon } from '@src/assets/images/members.svg'
import { ReactComponent as ClubsIcon } from '@src/assets/images/clubs.svg'
import { ReactComponent as BookingICon } from '@src/assets/images/booking.svg'
import { ReactComponent as PaymentIcon } from '@src/assets/images/payment.svg'
import Statistics from './statistics'

const Banner = () => {

    const [statistics, setStatistics] = React.useState([])

    const getStatistics = async () => {
        const response = await axios.get('/statistics')
        console.log(response)
        setStatistics(response.data)
    }

    useEffect(() => {
        getStatistics()
    }, [])
    const icons = {
        members: <MembersICon />,
        clubs: <ClubsIcon />,
        booking: <BookingICon />,
        payment: <PaymentIcon />
    }

    return (
        <section className='bg-gray-100  py-20 '>
            <div className="container flex items-center justify-between mx-auto">
                <div className="w-6/12">
                    <h2 className='text-5xl text-gray-700 font-semibold'>
                        We are the best <span className='text-primary'>IT Solution</span> company
                    </h2>
                    <p className='text-gray-500 mt-4'>
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="w-6/12">
                    <div className="flex flex-wrap gap-4 mt-10">
                        {statistics?.map((item, index) => (
                            <div key={index} className='w-5/12 flex gap-3'>
                                {icons[item.type]}
                                <Statistics key={index} data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner