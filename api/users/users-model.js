const db = require('../data/db-config');


function getUserById(user_id) {
    return (`hurray! you found user ${user_id}`)
}


module.exports = {
    getUserById,
}