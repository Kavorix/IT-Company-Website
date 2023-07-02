import React from 'react'
import { ReactComponent as Brand } from '@src/assets/Logo.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import { ReactComponent as MenuICon } from '@src/assets/menu.svg'

const Navbar = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = React.useState(false)

    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Features',
            path: '/features'
        },
        {
            name: 'Products',
            path: '/products'
        },
        {
            name: 'Testimonials',
            path: '/testimonials'
        },
    ]

    return (
        <section className={isScrolled ? `py-2 bg-background w-full fixed top-0 left-0 animate__animated animate__fadeInDown animate__faster` : 'bg-transparent absolute top-0 left-0 w-full animate__animated animate__fadeInUp animate__faster'} >
            <nav className='flex justify-between container items-center  mx-auto'>
                <div className="brand">
                    <Brand />
                </div>

                <ul className='max-[1024px]:hidden'>
                    {navItems.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <li className='inline-block px-4 py-2 text-gray-600 hover:text-gray-800'>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>

                {isMobile && (
                    <ul className={`${isMobile ? "animate__animated  animate__fadeInDown" : "animate__animated animate__fadeInUpBig"}  flex flex-col gap-5 text-center fixed z-50 bg-background p-5 top-12 left-0 w-full`}>
                        {navItems.map((item, index) => (
                            <Link to={item.path} key={index}>
                                <li className='inline-block px-4 py-2 hover:text-primary w-full text-gray-600 hover:text-gray-800'>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
                <div className="flex gap-3 items-center">
                    <div>
                        <MenuICon onClick={() => setIsMobile(!isMobile)} className='max-[1024px]:block min-[1024px]:hidden cursor-pointer' />
                    </div>
                    <Button size={"sm"} onClick={() => navigate('/sign-in')} className="hover:text-primary" rounded>
                        Sign in
                    </Button>
                    <Button variant={"primary"} size={"sm"} rounded>
                        Sign up
                    </Button>
                </div>


            </nav>
        </section >
    )
}

export default Navbar