import React, { useState } from 'react'
import "./Cards.css"


const ToursCards = ({ tourPack, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="container">
      <h1 className="tour_head">Our Tours</h1>
      {tourPack.map((val) => {
        const { id, name, price, image, info } = val;
        return (

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


        );
      })}
    </div>
  )
}

export default ToursCards;
