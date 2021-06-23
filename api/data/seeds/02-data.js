const users = [
    {
      username: 'bob',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
    },
    {
      username: 'sue',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
    },
  ]

const articles = [
    {title: 'article title 1', link: 'http://this-is-a-link-1', text: 'article text-1'},
    {title: 'article title 2', link: 'http://this-is-a-link-2', text: 'article text-2'},
    {title: 'article title 3', link: 'http://this-is-a-link-3', text: 'article text-3'},
    {title: 'article title 4', link: 'http://this-is-a-link-4', text: 'article text-4'},
    {title: 'article title 5', link: 'http://this-is-a-link-5', text: 'article text-5'},
]

const user_articles = [
    {user_id: 1, article_id: 1, category: 'animals', importance: 1},
    {user_id: 1, article_id: 2, category: 'animals', importance: 3},
    {user_id: 1, article_id: 3, category: 'plants', importance: 5},
    {user_id: 1, article_id: 4, category: 'geology', importance: 2},
    {user_id: 1, article_id: 5, category: 'physiology', importance: 1},
    
    {user_id: 2, article_id: 1, category: 'plants', importance: 1},
    {user_id: 2, article_id: 2, category: 'plants', importance: 5},
    {user_id: 2, article_id: 4, category: 'electricity', importance: 3},
]

exports.seed = async function (knex) {
   await knex('users').insert(users)
   await knex('articles').insert(articles)
   await knex('user_articles').insert(user_articles)
};