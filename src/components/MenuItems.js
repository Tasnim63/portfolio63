import React from 'react'

export default function MenuItems({menuItem}) {
  return (
    <div className='poetfolios'>
        {
            menuItem.map((item)=>{
                return <div className="portfolio" key={item.id}>
                   <div className="image-data">
                    <img src={item.image} alt="" />
                   <ul className="hover-item">
                    <li>
                     <a href={item.code}>source </a>
                     <a href={item.live}>preview</a>
                    </li>
                   </ul>
                   </div>
                    <h5>{item.name}</h5>
                    <p>{item.details}</p>
                </div>
            })
        }
    </div>
  )
}
