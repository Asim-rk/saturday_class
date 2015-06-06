/**
 * Created by Asim on 06-Jun-15.
 */


var app = angular.module('myApp',[]);

app.controller('Controller', [function(){
    this.user = [{name: "hey there", age: 20, email: 213213}];
    this.submited = function(){
        this.user.push({name: this.name , age: this.age , email: this.email});
        this.name = undefined;
        this.age = undefined;
        this.email = undefined;
    };

}]);