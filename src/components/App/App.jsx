import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { StoreProvider } from '../../state/store.jsx';

import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'; 
import GetStarted from '../GetStarted/GetStarted';
import Completed from '../Completed/Completed';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Your Feedback is Valued!</h1>
        <h4>Share your experience with us by answering the statement below</h4>
      </header>
      <StoreProvider>
        <Router>
          <Route exact path="/">
              <GetStarted/>
          </Route>

          <Route exact path="/feeling">
            <Feeling/> 
          </Route>

          <Route exact path="/understanding">
            <Understanding/>
          </Route>

          <Route exact path="/supported">
            <Supported/>
          </Route>

          <Route exact path="/comments">
            <Comments/>
          </Route>

          <Route exact path="/review">
            <Review/>
          </Route>

          <Route exact path="/completed">
            <Completed/>
          </Route>
      </Router>
    </StoreProvider>
    </div>
  );
}

export default App;
