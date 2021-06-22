const router = require('express').Router()
const { getUserById, addUser } = require('./users-model');

router.get('/', (req, res, next) => {
    res.json('congrats! Router wired')
})

router.get('/:user_id', async (req, res, next) => {
    const result = await getUserById(req.params.user_id)
    res.json(result);
})

router.post('/', async (req, res, next) => {
    const { username, password } = req.body
    const newUser = await addUser(req.body)
    res.json(newUser)
})

module.exports = router;