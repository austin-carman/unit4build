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
    {
      user_id: 1,
      title: 'article title 1', 
      link: 'http://this-is-a-link-1', 
      notes: 'article text-1',
      category: 'animals',
      importance: 1
    },
    {
      user_id: 1,
      title: 'article title 2', 
      link: 'http://this-is-a-link-2', 
      notes: 'article text-2',
      category: 'animals',
      importance: 2
    },
    {
      user_id: 1,
      title: 'article title 3', 
      link: 'http://this-is-a-link-3', 
      notes: 'article notes 3',
      category: 'plants',
      importance: 5
    },
    {
      user_id: 2,
      title: 'article title 4', 
      link: 'http://this-is-a-link-4', 
      notes: 'article notes 4',
      category: 'space',
      importance: 3
    },
   ]

exports.seed = async function (knex) {
   await knex('users').insert(users)
   await knex('articles').insert(articles)
};
