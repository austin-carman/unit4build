const router = require('express').Router()
const Articles = require('./articles-model');

//get all articles of all users
router.get('/', (req, res, next) => {
    Articles.getAllArticles()
        .then(articles => {
            res.json(articles)
        })
})

//get all saved articles for a specific user
router.get('/:user_id', (req, res, next) => {
    Articles.getUserArticles(req.params.user_id)
        .then(articles => {
            res.status(200).json(articles)
        })
        .catch(next)
})

// update an article for a specific user
router.put('/:user_id/edit', (req, res, next) => {
    Articles.updateArticle(req.params.user_id, req.body)
        .then(updated => {
            res.status(201).json(updated)
        })
        .catch(next)
})

// add new saved article for a specific user
router.post('/:user_id/add', (req, res, next) => {
    Articles.addNewArticle(req.params.user_id, req.body)
        .then(newArticle => {
            res.status(200).json(newArticle);
        })
        .catch(next)
})

// delete a user's saved article
router.delete('/:article_id', (req, res, next) => {
    Articles.deleteArticle(req.params.article_id)
        .then(removed => {
            res.status(200).json(removed)
        })
        .catch(next)
})


module.exports = router;