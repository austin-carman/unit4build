const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');
const Users = require('../users/users-model');
const { validateBody, checkUsernameFree, checkUsernameExists } = require('./auth-middleware');

// Register a new user
router.post('/register', validateBody, checkUsernameFree, (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    Users.addUser({ username, password: hash })
      .then(newUser => {
          res.status(201).json(newUser)
      })
      .catch(next);
  });

// User Login
router.post('/login', validateBody, checkUsernameExists, (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = tokenBuilder(req.user)
        res.status(200).json({
        message: `Welcome back, ${req.user.username}`,
        token, // this token is being returned here just fine
    })
    } else {
        next({ status: 401, message: 'invalid credentials' })
    }
});

module.exports = router;

