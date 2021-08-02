import React, { useState } from 'react'
import "./Cards.css"


const ToursCards = ({ packs, removeItem }) => {
  console.log(packs);
  const [readMore, setReadMore] = useState(false);
  const { id, name, price, image, info } = packs;

  return (
    <>
      <div className="tourCard" key={id}>
        <div className="tourImgDiv"> <img src={image} alt="NA" /></div>
        <div className="name_price">
          <h1>{name}</h1>
          <h2>${price}</h2>
        </div>
        <p className="tour_info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <span className="read_clicker" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : ' Read More'}
          </span>
        </p>
        <button onClick={() => removeItem(id)}>Not Interested!</button>
      </div>
    </>
  )
}

export default ToursCards;
