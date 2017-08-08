
import React from 'react';
import { connect } from 'react-redux';

import {
    ListUsersAsync,
    ListUsers
} from '../Actions.jsx';

import UserList from '../components/userList.jsx';

const mapStateToProps = state => {
    return { 
        users: state.account.users,
        isLoading: state.account.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(ListUsersAsync());
            //dispatch(ListUsers());
        }
    }
};

const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListContainer;