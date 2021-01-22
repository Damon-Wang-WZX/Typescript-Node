"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var request_1 = require("request");
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        var options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
        var reqUserInfoUrl = "https://api.github.com/users/" + userName;
        request_1.get(reqUserInfoUrl, options, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        var options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
        var reqUserReposUrl = "https://api.github.com/users/" + userName + "/repos";
        request_1.get(reqUserReposUrl, options, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
