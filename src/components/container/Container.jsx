import React from 'react'

function Container({children: props}) {
    return <div className='w-full max-w-7xl mx-auto px-4 border-2 border-red-600'> {props} </div>
    
}

export default Container
