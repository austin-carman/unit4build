exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
    })
    .createTable('articles', (articles) => {
      articles.increments('article_id')
      articles.string('title', 200).notNullable()
      articles.string('link', 200).notNullable()
      articles.string('text', 200)
    })
    .createTable('user_articles', (user_articles) => {
      user_articles.increments('user_articles_id')
      user_articles.integer('user_id', 200)
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      user_articles.integer('article_id', 200)
        .notNullable()
        .unsigned()
        .references('article_id')
        .inTable('articles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      user_articles.string('category', 200)
      user_articles.integer('importance', 200)
        .unsigned()
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('user_articles')
    .dropTableIfExists('articles')
    .dropTableIfExists('users')

}
