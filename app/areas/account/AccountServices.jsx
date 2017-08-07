
import ajax from 'superagent';

var loadUsers = () => {
    return [
        { id: 1, name: 'alma', age: 12 },
        { id: 2, name: 'alma', age: 12 },
        { id: 3, name: 'alma', age: 12 }
    ];
};

var loadUsersAsync = (success) => {
    return ajax.get('http://ireiterusermanager.azurewebsites.net/api/management')
    .end(function(err, res){
        success(res.body);
    });
};

export { loadUsers, loadUsersAsync };