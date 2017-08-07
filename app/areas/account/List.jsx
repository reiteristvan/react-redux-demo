
import React from 'react';
import ReactDOM from 'react-dom';

import UserListContainer from './containers/UserListContainer.jsx';

export default class List extends React.Component{
    render(){
        return (
            <div>
                <h1>List</h1>
                <UserListContainer />
            </div>
        );
    }
}