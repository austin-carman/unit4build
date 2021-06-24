const router = require('express').Router()
const UserArticles = require('./u_a-model');

router.put('/', (req, res, next) => {
    UserArticles.updateUserArticle(req.body)
        .then(updated => {
            res.status(201).json(updated)
        })
        .catch(next)
})

router.post('/save/:article_id', (req, res, next) => {
    UserArticles.saveArticle(req.params.article_id)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(next)
})

module.exports = router;