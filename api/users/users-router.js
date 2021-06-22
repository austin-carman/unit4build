const router = require('express').Router()
const { getUserById } = require('./users-model');

router.get('/', (req, res, next) => {
    res.json('congrats! Router wired')
})

router.get('/:user_id', async (req, res, next) => {
    const result = await getUserById(req.params.user_id)
    res.json(result);
})

module.exports = router;