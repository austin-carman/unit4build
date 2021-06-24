const db = require('../data/db-config');

// // all articles by all users
// async function getAllArticles() {
//     const articles = await db('articles')
//     return articles
// }

// all articles of specific user
async function getUserArticles(user_id) {
    const articles = await db('articles')
        .where('user_id', user_id)
    return articles;
}

// update an article for specific user
async function updateArticle(user_id, update) {
    const { article_id, title, link, notes, category, importance } = update;
    const [updated] = await db('articles')
        .where({
            'article_id': article_id,
            'user_id': user_id
        })
        .update(
            {
                'article_id': article_id,
                'title': title,
                'link': link,
                'notes': notes,
                'category': category,
                'importance': importance
            }, 
            [
                'article_id', 
                'title', 
                'link', 
                'notes', 
                'category', 
                'importance'
            ]
        )
    return updated;
}

// adds a new article for a specific user's saved list
async function addNewArticle(user_id, article) {
    const { title, link, notes, category, importance } = article
    const [newArticle] = await db('articles')
        .insert(
            {
                user_id,
                title,
                link,
                notes,
                category,
                importance
            }, 
            [
                'article_id', 
                'user_id', 
                'title', 
                'link', 
                'notes',
                'category',
                'importance'
            ]
        )
    return newArticle;
}

// delete a user's saved article
async function deleteArticle(article_id) {
    const [deleted] = await db('articles')
        .where('article_id', article_id)
        .del(
            [
                'article_id',
                'title',
                'link',
                'notes',
                'category',
                'importance'
            ]
        )
    return deleted;
}

module.exports = {
    // getAllArticles,
    updateArticle,
    addNewArticle,
    getUserArticles,
    deleteArticle,
}