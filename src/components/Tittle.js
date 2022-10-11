import React from 'react'

export default function Tittle({title ,span}) {
  return (
    <div className='Tittle'>
        <h3>
            {title}
            <span>{span}</span>
        </h3>
    </div>
  )
}
