app.controller('teacherController', function ($scope, $http, $rootScope, $location) {


    $scope.teacherLogin = function (username, password) {
        var data = {
            username: username,
            password: password
        }
        console.log(data)
    }

    $scope.teacherSignUp = function (username, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert('password and confirm password must be same..')
        }
        else {
            var data = {
                username: username,
                password: password
            }
            console.log(data)
        }
    }
})