import React from 'react'

const Input = (props) => {
    const { label, id, type, name, placeholder, className, ...rest } = props
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-600 ">{label}</label>
            <input type="text" {...props} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg  block w-full p-2.5  " placeholder={placeholder} />
        </div>
    )
}

export default Input