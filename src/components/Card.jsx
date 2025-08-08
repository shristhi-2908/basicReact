import React from 'react'
import { FaHandsBound } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

const cardsData=[
  {id:1,title:"Volunteer Now",icon:<FaHandsBound />},
  {id:2,title:"Start Donation",icon:<FaDonate />},
  {id:3,title:"Our Causes",icon:<MdVolunteerActivism />},
  {id:4,title:"Support Circle",icon:<FaSmile />}
]



function Card() {
  return (
      <div className="card-container">
    {cardsData.map((card)=>(
       <div key={card.id} className="card-body">
      <div className="card_icon">{card.icon}</div>
    <h5 className="card-title">{card.title}</h5>
    <p className="card-text">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit</p></div>
    ))}
</div>
  )
}

export default Card
