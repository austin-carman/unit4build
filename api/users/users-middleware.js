const Users = require('./users-model');

const checkSomething = (req, res, next) => {
    console.log('something has been checked');
    next()
}

const checkBody = (req, res, next) => {
    console.log('checked body');
    next()
}


module.exports = {
    checkSomething,
    checkBody,
}
