app.controller('studentDashboardController', function ($scope, $http, $rootScope, $location, myFact) {

    $scope.studentlogoutFn = function () {
        localStorage.setItem('token', "");
        $location.path("/")
        myFact.Message('danger', 'LogOut Successfully')
    }


    $scope.quiz = function (code) {
        
        $http.post('https://marksup-adgitm.herokuapp.com/get/quizByUniqueCode',{"uniqueCode":code}).then(function (data) {
            console.log('quiz',data)
        }).catch(function (err) {
            console.log(err)
        })
    }
})