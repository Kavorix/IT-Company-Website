import React from 'react'
import classNames from 'classnames';



const Button = ({ children, type, rounded, size, variant, icon, className, ...props }) => {

    const buttonClasses = classNames(
        'button',
        "flex gap-4",
        rounded && 'rounded',
        size === 'sm' && 'py-1 px-3',
        size === 'md' && 'py-2 px-4',
        size === 'lg' && 'py-3 px-5',
        {
            'bg-primary text-white': variant === 'primary',
            'bg-secondary text-white': variant === 'secondary',
            'bg-accent text-white': variant === 'accent',
            'border-[1px] border-primary hover:bg-primary hover:text-white': variant === 'outline',
            'bg-transparent text-primary': variant === 'default',
        },
        'py-1 px-3',
        className


    )

    return (
        <button
            type={type}
            className={buttonClasses}
            {...props}
        >
            {icon && <span className='mr-2'>{icon}</span>}
            {children}
        </button>
    )
}

export default Button