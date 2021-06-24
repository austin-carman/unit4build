const db = require('../data/db-config');

async function updateUserArticle(update) {
  const { user_id, article_id, category, importance } = update;
  const [updated] = await db('user_articles as ua')
    .join('articles as a', 'a.article_id', '=', 'ua.article_id')
    .where({
      'ua.user_id': user_id,
      'ua.article_id': article_id
    })
    .update(
      {category, importance}, 
      [
        'ua.user_id', 
        'ua.article_id', 
        'ua.category', 
        'ua.importance',
      ]
    )

  return updated;
}

async function saveArticle(article_id) {
  console.log('id', article_id);
  const saved = await db('user-articles as ua')
    .join('articles as a', 'a.article_id', '=', 'ua.article_id')
    .insert(
      {
        'ua.article_id': article_id,
      }, 
      ['user_articles_id']
    )
  console.log(saved);
  return saved;
}

module.exports = {
  updateUserArticle,
  saveArticle
}