app.controller('studentController', function ($scope, $http, $rootScope, $location,myFact) {

    $scope.studentLogin = function (email, password) {
        myFact.Login(email, password,"https://marksup-adgitm.herokuapp.com/teacher/signIN",'/student-dashboard','student')
    }

    $scope.studentSignUp = function (name, email, password, confirmPassword) {
        myFact.Signup(name, email, password, confirmPassword,"https://marksup-adgitm.herokuapp.com/teacher/signUp",'/student-Login')
    }
})