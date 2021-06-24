const db = require('../data/db-config');

async function getAllArticles() {
    const articles = await db('articles')
    return articles
}

module.exports = {
    getAllArticles,
}