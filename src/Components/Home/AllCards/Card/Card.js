import React from 'react';
import './Card.css';

function Card({image, name, temperament, weight, }) {
  return(
    <div className='card'>
      <div className='div_image_card'>
        <img className='card_image_dog' src={image} alt={name} />
      </div>
      <div className='div_info_card'>
        <span className='card_name_dog'>{name}</span>
        <div>
          <span className='card_weight_dog'>{weight} KG</span>
        </div>
        <div>
          <p className='card_temperament_dog'>
            {temperament}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card;