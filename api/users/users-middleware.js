const Users = require('./users-model');

const checkSomething = (req, res, next) => {
    console.log('something has been checked');
    next()
}


module.exports = {
    checkSomething,
}
