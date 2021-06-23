const Users = require('../users/users-model');
const { JWT_SECRET } = require('../../secret/index');
const jwt = require('jsonwebtoken');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('restricted middleware token', token); // token here is undefined
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Token invalid' })
      } else {
        req.decodedJwt = decoded;
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'Token required' });
  }
}

const validateBody = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        next({
            status: 400,
            message: 'username and password required'
        })
    } else {
        next()
    }
}

async function checkUsernameFree(req, res, next) {
    const user = await Users.findBy(
        { username: req.body.username }
    )
    if(!user) {
        next()
    } else {
    next({ message: "username taken", status: 422 })
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
      const { username } = req.body;
      const user = await Users.findBy({ username })
      if (!user) {
        next({
          status: 401,
          message: 'invalid credentials'
        })
      } else {
        req.user = user
        next()
      }
    } catch (err) {
      next(err)
    }
  }


module.exports = {
    validateBody,
    checkUsernameFree,
    checkUsernameExists,
    restricted
}
