require('dotenv').config();//for .env pakage run porpose
const express = require('express');
const app = express();

const port = 4000;

const githubData = {
    "login": "hugh",
    "id": 1235,
    "node_id": "MDQ6VXNlcjEyMzU=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1235?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hugh",
    "html_url": "https://github.com/hugh",
    "followers_url": "https://api.github.com/users/hugh/followers",
    "following_url": "https://api.github.com/users/hugh/following{/other_user}",
    "gists_url": "https://api.github.com/users/hugh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hugh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hugh/subscriptions",
    "organizations_url": "https://api.github.com/users/hugh/orgs",
    "repos_url": "https://api.github.com/users/hugh/repos",
    "events_url": "https://api.github.com/users/hugh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hugh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hugh Morgenbesser",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 1,
    "followers": 6,
    "following": 2,
    "created_at": "2008-02-27T22:52:17Z",
    "updated_at": "2024-03-21T13:48:11Z"
  }
app.get('/',(req,resp)=>{
    resp.send("Hello world");
})

app.get('/twitter',(req,resp)=>{
    resp.send('vishal.com');
})

app.get('/login',(req,resp)=>{
    resp.send('<h1>login on choi or code</h1>')
})

app.get('/youtube',(req,resp)=>{
    resp.send('<h1>chai or code</h1>')
})

app.get('/github',(req,resp)=>{
    resp.json(githubData);
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening  on port  ${port}`)
}) 