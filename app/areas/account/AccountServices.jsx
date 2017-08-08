
import ajax from 'superagent';

var loadUsers = () => {
    return [
        { Id: 1, Name: 'alma', Age: 12 },
        { Id: 2, Name: 'alma', Age: 12 },
        { Id: 3, Name: 'alma', Age: 12 }
    ];
};

var loadUsersAsync = (success) => {
    return ajax.get('http://ireiterusermanager.azurewebsites.net/api/management')
    .end(function(err, res){
        success(res.body);
    });
};

export { loadUsers, loadUsersAsync };