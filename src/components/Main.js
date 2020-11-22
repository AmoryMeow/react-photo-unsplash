import React from 'react';
import './Main.css';
import Button from './Button';
import Input from './Input';
import Card from './Card.js';
import Spinner from './Spinner.js';

function Main({handleSubmit,searchQuery,setSearchQuery,isSubmited,cards}) {
  return (
    <div className="Main">
        <form className="Main-search" onSubmit={handleSubmit}>
          <Input 
            placeholder="Введите ваш запрос" 
            value={searchQuery} 
            handleChange={setSearchQuery}
          />
          <Button title="Search" type="submit" />
        </form>
        <div className="Main-cards">
          {
            isSubmited
              ? <Spinner />
              : cards.map(card => <Card key={card.id} {...card} />)
          }
        </div>
      </div>
  )
}

export default Main;