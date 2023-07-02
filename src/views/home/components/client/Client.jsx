import React from 'react'
import Title from '@src/components/title/Title'
import { ReactComponent as ClientImg1 } from '@src/assets/images/client_1.svg'
import { ReactComponent as ClientImg2 } from '@src/assets/images/client_2.svg'
import { ReactComponent as ClientImg3 } from '@src/assets/images/client_3.svg'
import { ReactComponent as ClientImg4 } from '@src/assets/images/client_4.svg'
import { ReactComponent as ClientImg5 } from '@src/assets/images/client_5.svg'
import { ReactComponent as ClientImg6 } from '@src/assets/images/client_6.svg'

const Client = () => {
    return (
        <section className='text-center mt-6 container mx-auto'>
            <Title title="Our Clients" desc="We have been working with some Fortune 500+ clients" />
            <div className="flex gap-6 mt-4">
                <ClientImg1 className="w-1/6" />
                <ClientImg2 className="w-1/6" />
                <ClientImg3 className="w-1/6" />
                <ClientImg4 className="w-1/6" />
                <ClientImg5 className="w-1/6" />
                <ClientImg6 className="w-1/6" />
            </div>
        </section>
    )
}

export default Client