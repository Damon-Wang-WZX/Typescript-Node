"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var express_1 = __importDefault(require("express"));
var url_1 = require("url");
var app = express_1.default();
var api = new GithubApiService_1.GithubApiService;
app.get('/github', function (req, res) {
    var userName = new url_1.URL(req.url, 'http://localhost:3000/').searchParams.get('username');
    api.getUserInfo(userName, function (user) {
        api.getRepos(user.login, function (repos) {
            var sortedRepos = sortBy_1.default(repos, function (repo) { return (repo.size * -1); });
            user.repos = sortedRepos;
            res.send(user);
        });
    });
});
// console.log(url.parse('http://localhoset:3000/github?username=aaa', true).query.username);
// console.log(new url.URL('/github?username=aaa').searchParams.get('username'));
app.listen(3000, function () {
    console.log('serve running port: 3000');
});
