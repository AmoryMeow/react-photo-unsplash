import React from 'react';
import './Photo.css';
import {Link, useParams} from 'react-router-dom';

function Photo({photos}) {
  const getPhotoById = (photos, id) => photos.find(photo => photo.id === id);

  const {id} = useParams();
  const photo = getPhotoById(photos, id);

  return (
    <div className="Photo">
      <Link className="Photo-goback" to="/">Назад</Link>
      {
        photo
        ? 
          <>
            <img src={photo.src} alt={photo.alt} className="Photo-image"/>
            <p className="Photo-title">{photo.title}</p>
            <p className="Photo-subtitle">{photo.subtitle}</p>
          </>
        :
          <p className="Photo-note">Фотография не найдена</p>
      }
    </div>
  );
}

export default Photo;