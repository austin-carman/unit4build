const router = require('express').Router();
const Users = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

router.get('/:user_id', restricted, async (req, res, next) => {
    try {
        const result = await Users.findById(req.params.user_id)
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
});

module.exports = router;