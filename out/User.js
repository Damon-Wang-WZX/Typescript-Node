"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(user) {
        this.repos = [];
        this.login = user.login;
        this.name = user.name;
        this.bio = user.bio;
    }
    User.prototype.greet = function () {
        console.log("Welcome to typescript! My name is " + this.name + "!");
    };
    return User;
}());
exports.User = User;
