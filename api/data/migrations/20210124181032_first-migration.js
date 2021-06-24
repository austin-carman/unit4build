exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
    })
    .createTable('articles', (articles) => {
      articles.increments('article_id')
      articles.integer('user_id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      articles.string('title', 200)
        .notNullable()
      articles.string('link', 200)
        .notNullable()
      articles.string('notes', 200)
      articles.string('category', 200)
      articles.integer('importance', 200)
        .unsigned()
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('articles')
    .dropTableIfExists('users')

}
