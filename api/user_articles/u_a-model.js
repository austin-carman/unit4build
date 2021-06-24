const db = require('../data/db-config');

async function updateArticle(update) {
  const { user_id, article_id, category, importance } = update;
  const [updated] = await db('user_articles')
    .where({
      user_id: user_id,
      article_id: article_id
    })
    .update(
      {category, importance}, 
      [
        'user_id', 
        'article_id', 
        'category', 
        'importance'
      ]
    )
    
  return updated;
}


module.exports = {
  updateArticle,
}