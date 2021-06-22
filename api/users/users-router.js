const router = require('express').Router();
const Users = require('./users-model');
const { checkSomething, checkBody } = require('./users-middleware');

router.get('/:user_id', checkSomething, async (req, res, next) => {
    const result = await Users.getUserById(req.params.user_id)
    res.json(result);
});

router.post('/', checkBody, async (req, res, next) => {
    const { username, password } = req.body
    const newUser = await Users.addUser(req.body)
    res.json(newUser)
});

module.exports = router;
