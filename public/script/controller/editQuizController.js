

app.controller('editQuizController', function ($scope, $http, $rootScope, $location,myFact) {

    console.log($rootScope.QuizAccToCode)
    
    $scope.updateQuiz=function(code){
console.log(code)
        // $http.post('',{}).then(function(data){
        //     console.log(data)
        //     $location.path('/viewQuiz')
        // }).catch(function(err){
        //     console.log(err)
        // })
    }
})