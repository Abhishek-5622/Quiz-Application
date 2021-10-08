app.controller('studentController', function ($scope, $http, $rootScope, $location) {

    $scope.studentLogin = function (username, password) {
        var data = {
            username: username,
            password: password
        }
        console.log(data)
    }

    $scope.studentSignUp = function (username, password, confirmPassword) {
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