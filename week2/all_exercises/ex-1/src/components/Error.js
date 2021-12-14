import React from 'react'

const Error = ({children}) => {
    return (
        <div className='error'>
            <i className="fas fa-exclamation-triangle fa-2x" />
            <span className='text'>{children}</span>
        </div>
    )
}

export default Error
