import React from 'react'
import ContactItem from '../components/ContactItem'
import phone from '../images/telephone.png';
import email from '../images/gmail.png';
import location from '../images/placeholder.png';
import Tittle from '../components/Tittle';
export default function Contact() {
  return (
  <div>
     <div className="title">
     <Tittle title={"Contact Me"} span={"Contact Me"} />
       </div>
     <div className='ContactPage'>
      <div className="map-sect">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20693.24360958173!2d91.02009991484636!3d23.529509052046347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546519785fe84f%3A0x7c58e5f6bb99999b!2sBiharmandol%2C%20Mohanpur!5e0!3m2!1sen!2sbd!4v1666509718121!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  title="myFrame"></iframe>

        
      </div>
      <div className="contact-sect">
          <ContactItem icon={phone} text1={'+8801.......'}  title={'phone'}/>
          <ContactItem icon={email} text1={'tamanna202163@gmail.com'}  title={'Email'}/>
          <ContactItem icon={location} text1={'comilla , Bangladesh'}  title={'Address'}/>
        </div>
    </div>
  
  </div>
  )
}
