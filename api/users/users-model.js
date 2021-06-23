const db = require('../data/db-config');

function findBy(filter) {
    const user = db('users')
      .where(filter)
      .first()
    return user;
}

function findById(user_id) {
    return (`hurray! you found user ${user_id}`);
}

async function addUser({ username, password }) {
    const newUser = await db.transaction(async trx => {
        const [result] = await trx('users')
        .insert(
            { username, password }, 
            ['user_id', 'username', 'password']
            )
            return result
    })
    return newUser
}

module.exports = {
    findById,
    addUser,
    findBy,
}
