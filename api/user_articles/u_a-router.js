const router = require('express').Router()
const UserArticles = require('./u_a-model');

router.put('/', (req, res, next) => {
    UserArticles.updateArticle(req.body)
        .then(updated => {
            res.status(201).json(updated)
        })
        .catch(next)
})

module.exports = router;