
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './ReducerRoot.jsx';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
    browserHistory } from 'react-router-dom';

import List from './areas/account/List.jsx';
import New from './areas/account/New.jsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {
    account: {
        users: [],
        isLoading: false
    }
},
composeEnhancers(applyMiddleware(thunk)));

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <div id="page">
                        <div>
                            <ul>
                                <li><Link to="/">List</Link></li>
                                <li><Link to="/dashboard">New</Link></li>
                            </ul>
                        </div>
                        
                        <div id="content">
                            <Route exact path='/' component={List} />
                            <Route exact path='/dashboard' component={New} />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}