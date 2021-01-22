import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from './Repo';
import sortBy from "lodash/sortBy";
import express from "express";
import { URL } from 'url';

const app = express();
const api: GithubApiService = new GithubApiService;

app.get('/github', (req, res) => {

  const userName:any = new URL(req.url, 'http://localhost:3000/').searchParams.get('username');

  api.getUserInfo(userName, (user: User) => {
    api.getRepos(user.login, (repos: Repo[]) => {
      const sortedRepos = sortBy(repos, (repo) => (repo.size * -1));
      user.repos = sortedRepos;
      res.send(user);
    })
  });
});

app.listen(3000, () => {
  console.log('serve running port: 3000');
});
