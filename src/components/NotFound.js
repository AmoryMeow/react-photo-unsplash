import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return(
    <div className="NotFound">
      <p className="NotFound-note">Страница не найдена. Вернуться <Link className="NotFound-link" to="/">Назад</Link></p>
    </div>
  )
}

export default NotFound;