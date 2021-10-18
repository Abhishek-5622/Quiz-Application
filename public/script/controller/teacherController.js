app.controller('teacherController', function ($scope, $http, $rootScope, $location,myFact) {


    $scope.teacherLogin = function (email, password) {
        myFact.Login(email, password,"https://marksup-adgitm.herokuapp.com/teacher/signIN",'/teacher-dashboard','teacher')
    }

    $scope.teacherSignUp = function (name, email, password, confirmPassword) {
        myFact.Signup(name, email, password, confirmPassword,"https://marksup-adgitm.herokuapp.com/teacher/signUp",'/teacher-Login')
    }

   
})