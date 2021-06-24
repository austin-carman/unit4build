const router = require('express').Router()
const Articles = require('./articles-model');

router.get('/', (req, res, next) => {
    Articles.getAllArticles()
        .then(articles => {
            res.json(articles)
        })
})


module.exports = router;