import React from 'react'
import { Element } from 'react-scroll'
import Contact from '../Contact/contact'
import "./style.css"

export const Contactinfo = () => {
  return (
    <div className='contact'>
        <Element name="Contact" >
        <Contact/>
    
        </Element>

    </div>
  
  )
}
