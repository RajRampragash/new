import React from 'react'
import './style.css'

export const ProductCard = ({img}) => {
    
  return (
   <div className='project'>
    <div className='project_contant'>
    
     <img src={img} alt=''/>
    </div>

   </div>
  )
}