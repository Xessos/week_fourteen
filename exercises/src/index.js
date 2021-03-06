import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import AppLayout from './AppLayout';
import Home from './Home';
import { Router, Route, hashHistory, Link, IndexLink } from 'react-router';

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Router path="/" component={AppLayout}>
        <Route path="/" component={Home}/>
        <Route path="/counter" component={CounterContainer}/>
        <Route path="/dragon" component={DragonGameContainer}/
        <Route path="/gallery" component={GalleryContainer}/>
        <Route path="/weather/:name" component={WeatherContainer}/>
      </Router>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
