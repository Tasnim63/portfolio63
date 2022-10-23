import React from 'react'

export default function ContactItem({icon,text1,text2,title}) {
  return (
    <div className='ContactItem'>
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-item">
          <h5>{title}</h5>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}
