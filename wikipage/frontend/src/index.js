import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './index.css';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppLayout from './AppLayout';
import { Router, Route, hashHistory, Link, IndexLink, IndexRoute} from 'react-router';
import WikiPageContainer from './wiki-page/WikiPage';
import WikiPageReducer from './wiki-page/WikiPage.reducer';

const reducer = Redux.combineReducers({
  wiki: WikiPageReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Home}/>
        <Route path="/wiki/:title" component={WikiPageContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
