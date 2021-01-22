import { get } from "request";
import { User } from './User';
import { Repo } from './Repo';

export class GithubApiService {

  getUserInfo(userName: string, cb: any) {
    const options = {
      headers: {
        'User-Agent': 'request'
      },
      json: true
    };
    const reqUserInfoUrl = `https://api.github.com/users/${userName}`;
    get(reqUserInfoUrl, options, (error, response, body) => {
      const user = new User(body);
      cb(user);
    });
  }

  getRepos(userName: string, cb: any) {
    const options = {
      headers: {
        'User-Agent': 'request'
      },
      json: true
    };
    const reqUserReposUrl = `https://api.github.com/users/${userName}/repos`;
    get(reqUserReposUrl, options, (error, response, body) => {
      let repos: Repo[] = body.map((repo:any) => new Repo(repo));
      cb(repos);
    });
  }

}