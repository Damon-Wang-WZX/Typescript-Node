import { Repo } from './Repo';

export class User {
  login: string;
  name: string;
  bio: string;
  repos: Repo[] = [];

  constructor(user: any) {
    this.login = user.login;
    this.name = user.name;
    this.bio = user.bio;
  }

  greet() {
    console.log(`Welcome to typescript! My name is ${this.name}!`);
  }
}