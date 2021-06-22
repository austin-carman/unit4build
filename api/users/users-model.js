const db = require('../data/db-config');


function getUserById(user_id) {
    return (`hurray! you found user ${user_id}`)
}

function addUser(newUser) {
    return (`new User ${newUser.username} has been added with password ${newUser.password}`)
}


module.exports = {
    getUserById,
    addUser
}