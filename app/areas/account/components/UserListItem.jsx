
import React from 'react';

export default class userListItem extends React.Component{
    render(){
        return (
            <div>
                <h5>{this.props.name}</h5>
                <h5>{this.props.age}</h5>
                <hr />
            </div>
        );
    }
}