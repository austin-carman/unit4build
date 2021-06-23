const router = require('express').Router();
const Users = require('./users-model');
const { checkSomething } = require('./users-middleware');

router.get('/:user_id', checkSomething, async (req, res, next) => {
    const result = await Users.findById(req.params.user_id)
    res.json(result);
});

module.exports = router;