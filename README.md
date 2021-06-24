Register a new user
  BaseURL: /api/auth
  Endpoint: [POST] /register
  Body:
    username: required
    password: required
  
  
User Login
  BaseURL: /api/auth
  Endpoint: [POST] /login
  Body:
    username: required
    password: required

Get all articles of all users
  BaseURL: /api/articles
  Endpoint: [GET] /
  
Get all saved articles for a specific user
  BaseURL: /api/articles
  Endpoint: [GET] /:user_id

Update an article for a specific user
  BaseURL: /api/articles
  Endpoint: [PUT] /:user_id/edit
  Body:
    article_id: required
    title: optional
    link: optional
    notes: optional
    category: optional
    importance: optional

Add new saved article for a specific user
  BaseURL: /api/articles
  Endpoint: [PUT] /:user_id/add
  Body:
    title: required
    link: required
    notes: optional
    category: optional
    importance: optional

Delete a user's saved article
  BaseURL: /api/articles
  Endpoint: [PUT] /:article_id
