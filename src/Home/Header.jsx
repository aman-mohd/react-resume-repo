import React from 'react'
import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import dp from "../Pictures/dp-min.jpg"

const Header = ({data:{fullname, currentLocation, phone, email}}) => {
  return (
    <div className="header_div">
      <div className="name_div">
        <h1>{fullname}</h1>
      </div>

      <div className="dp_div">
        <img className="imgdp" src={dp} alt="na" />
      </div>

      <div className="contact_div">
      <p><GoLocation/> <span>{currentLocation}</span> </p>
      <p><GoDeviceMobile/> <span>{phone}</span> </p>
      <p><GoMail/> <span>{email}</span> </p>
      </div>
    </div>
  )
}

export default Header
