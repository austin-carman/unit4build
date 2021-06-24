BASEURL: https://unit4buildwk.herokuapp.com/


*** Register a new user ***
  
  Endpoint: [POST] api/auth/register
  
  Body:
  
    username: required
    
    password: required
  
  
*** User Login ***
  
  Endpoint: [POST] /api/auth/login
  
  Body:
  
    username: required
    password: required
    

*** Get all articles of all users ***
  
  Endpoint: [GET] /api/articles
  
  
*** Get all saved articles for a specific user *** 
  
  Endpoint: [GET] /api/articles/:user_id
  

 *** Update an article for a specific user ***
  
  Endpoint: [PUT] /api/articles/:user_id/edit
  
  Body:
  
    article_id: required
    title: optional
    link: optional
    notes: optional
    category: optional
    importance: optional
    

 *** Add new saved article for a specific user *** 
  
  Endpoint: [PUT] /api/articles/:user_id/add
  
  Body:
  
    title: required
    link: required
    notes: optional
    category: optional
    importance: optional
    

 *** Delete a user's saved article *** 
  
  Endpoint: [PUT] /api/articles/:article_id
