// Stylesheet
import './index.css';

// Standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

// React Router stuff
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

// import all components and their reducers here
import helloReducer from './hello/Hello.reducer';
import HelloContainer from './hello/Hello';
import homeReducer from './home/Home.reducer';
import HomeContainer from './home/Home';
import ProductContainer from './product_page/Product_Page';
import productReducer from './product_page/Product_Page.reducer';
import SignupContainer from './signup/Signup';
import signupReducer from './signup/Signup.reducer';
import loginReducer from './login/Login.reducer';
import LoginContainer from './login/Login'

const reducer = Redux.combineReducers({
  // the hello property here corresponds to the
  // state => state.hello line - argument of
  // ReactRedux.connect in hello/Hello.js
  // Use this pattern for each component
  product: productReducer,
  hello: helloReducer,
  home: homeReducer,
  signup: signupReducer,
  login: loginReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/signup" activeClassName="active">Signup</Link></li>
          <li><Link to="/login" activeClassName="active">Login</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/product/:id" component={ProductContainer}/>
        <Route path="/signup" component={SignupContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
