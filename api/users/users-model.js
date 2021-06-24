const db = require('../data/db-config');

// find user by ....
function findBy(filter) {
    const user = db('users')
      .where(filter)
      .first();
    return user;
}

// find user by ID
async function findUserById(user_id) {
    const user = await db('users as u')
        .select('u.username', 'a.title', 'a.link', 'a.text', 'ua.category', 'ua.importance')
        .join('user_articles as ua', 'u.user_id', '=', 'ua.user_id')
        .join('articles as a', 'a.article_id', '=', 'ua.article_id')
        .where('u.user_id', user_id)
    return user;
}


// Register a new user
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
    findUserById,
    addUser,
    findBy,
}
