import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import ReactDom from 'react-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render= {
        props => <Movie {...props} addtoSavedList={addToSavedList} />
      } />
    </div>

  );
};

export default App;
