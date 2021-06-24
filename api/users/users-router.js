const router = require('express').Router();
const Users = require('./users-model');
const { restricted } = require('../auth/auth-middleware');

// add restricted middleware
router.get('/:user_id', async (req, res, next) => { // get user by id
    try {
        const result = await Users.findUserById(req.params.user_id)
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
});

router.post('/article', async (req, res, next) => {
    Users.addArticle(req.body)
        .then(result => {
            console.log('result', result);
            res.json(result)
        })
        .catch(next)
})


module.exports = router;
