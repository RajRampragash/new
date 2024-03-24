import React from 'react'
import img1 from "../../assests/img1.jpg"
import img2 from "../../assests/img10.jpeg"
import img3 from "../../assests/img3.jpg"
import img4 from "../../assests/img4.jpg"
import img5 from "../../assests/img5.jpg"
import img6 from "../../assests/img6.jpeg"
import img7 from "../../assests/img7.jpeg"
import img8 from "../../assests/img8.jpeg"
import img9 from "../../assests/img9.jpeg"
import img10 from "../../assests/img10.jpeg"
import img11 from "../../assests/img11.png"


import { ProductCard } from '../ProductCard'
import "./style.css"
const Benefit = () => {
    const image =[
        { img:img1 },
        { img:img2 },
        { img:img3 },
        { img:img4 },
        { img:img5 },
        { img:img6 },
        { img:img7 },
        { img:img8 },
        { img:img9 },
        { img:img10 },
        { img:img11},


]
  return (

    <div className='projectContainer__project'>
        {
            image.map((image,index)=>{
                return(<ProductCard key={index}
                    img={image.img}/>)
            })
        }

    </div>
 
  )
}

export default Benefit