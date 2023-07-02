import React from 'react'
import Title from '@src/components/title/Title'
import { ReactComponent as ServiceIcon1 } from '@src/assets/images/service_1.svg'
import { ReactComponent as ServiceIcon2 } from '@src/assets/images/service_2.svg'
import { ReactComponent as ServiceIcon3 } from '@src/assets/images/service_3.svg'
import ServiceCard from './ServiceCard'

const Services = () => {

    const services = [
        {
            icon: <ServiceIcon1 />,
            title: 'Membership Organisations',
            desc: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: <ServiceIcon2 />,
            title: 'National Associations',
            desc: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            icon: <ServiceIcon3 />,
            title: 'Clubs And Groups',
            desc: 'Our membership management software provides full automation of membership renewals and payments'
        },
    ]

    return (
        <section className='mt-12 container mx-auto'>
            <Title title="Manage your entire community in a single system" desc="Who is Nextcent suitable for?" />
            <div className='flex max-[768px]:flex-col items-center justify-around mt-4'>
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} data={service} />
                    ))
                }
            </div>
        </section>
    )
}

export default Services