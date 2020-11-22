import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({id, title, subtitle, alt, src}) {
  return (
   <Link className="Card" to={`/photo/${id}`}>
     <img className="Card-image" src={src} alt={alt}/>
     <p className="Card-title">{title}</p>
     <p className="Card-subtitle">{subtitle}</p>
   </Link>
  )
}

export default Card;