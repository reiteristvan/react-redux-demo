
import React from 'react';

import UserListItem from './UserListItem.jsx';

export default class UserList extends React.Component{
    renderList(){
        return (
        <div>
            <input type='submit' onClick={this.props.load} value='Load' />

            <ul>
                {this.props.users.map(user => 
                    <UserListItem key={user.Id} name={user.Name} age={user.Age} />)}
            </ul>
        </div>
        );
    }

    renderLoading(){
        return (
            <h1>Loading...</h1>
        );
    }

    render(){
        if(this.props.isLoading){
            return this.renderLoading();
        }
        else{
            return this.renderList();
        }
    }
}