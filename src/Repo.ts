export class Repo {
  name: string;
  size: number;
  language: string;

  constructor(repo:any) {
    this.name = repo.name;
    this.size = repo.size;
    this.language = repo.language;
  }
}