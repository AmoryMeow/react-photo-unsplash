import React from 'react';
import './App.css';
import api from '../api/Api.js';
import Main from './Main.js';
import {Route, Switch} from 'react-router-dom';
import Photo from './Photo.js';
import NotFound from './NotFound.js';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [isSubmited, setIsSubmitted] = React.useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitted(true);
  }

  React.useEffect(() => {
    if (isSubmited) {
      api.search(searchQuery).then(data => {
        setCards(data.results.map((item) => ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        })));
        setIsSubmitted(false);
      });
    }  
  }, [searchQuery, isSubmited]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Main 
              handleSubmit={handleSubmit}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isSubmited={isSubmited}
              cards={cards}
            />
        </Route>
        <Route exact path="/photo/:id">
          <Photo photos={cards}/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
