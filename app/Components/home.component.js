"use strict";
//import { Component } from "@angular/core";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//@Component({
//    template: `<img src="../../images/users.png" style="text-align:center"/>`
//})
//export class HomeComponent{
//}
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var global_1 = require("../Shared/global");
var HomeComponent = (function () {
    function HomeComponent(_userService) {
        this._userService = _userService;
        // model: any = {};
        this.clickMessage = '';
        this.indLoading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    HomeComponent.prototype.login = function (username, password) {
        var usernameIsFound = false;
        var passwordDoesNotMatch = false;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].LastName == username) {
                //we found the user, match firstname with password
                usernameIsFound = true;
                if (password == this.users[i].FirstName) {
                    this.clickMessage = 'Login Successfully!';
                    return;
                }
                else {
                    passwordDoesNotMatch = true;
                }
            }
        }
        //var username = this.model.username;
        this.clickMessage = 'Login Failed!';
        if (usernameIsFound)
            this.clickMessage = this.clickMessage + "Due to not matching password";
        else
            this.clickMessage = this.clickMessage + "User not found";
    };
    HomeComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }
        // error => this.msg = <any>error
        );
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "<img src=\"../../images/users.png\" style=\"text-align:center\"/>\n<br/>\n<div name=\"userNameDiv\">\n<label for=\"username\">Username</label>\n <input #username type=\"text\" name=\"username\" required />\n</div>\n    <div name=\"passwordDiv\">\n<label for=\"password\">Password</label>\n <input #password type=\"password\" name=\"password\" required/>\n</div>\n<div name=\"buttonDiv\">\n <button (click)=\"login(username.value,password.value)\" class=\"btn btn-primary\">Login</button>\n</div>\n<br/>\n    {{clickMessage }}"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map