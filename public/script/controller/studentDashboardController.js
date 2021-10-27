

app.controller('studentDashboardController', function ($interval, $scope, $http, $rootScope, $location, myFact) {

    $scope.studentlogoutFn = function () {
        localStorage.setItem('token', "");
        $location.path("/")
        myFact.Message('danger', 'LogOut Successfully')
    }

    $scope.showStart = false;
    $scope.startQuiz = function (code) {

        $http.post('https://marksup-adgitm.herokuapp.com/get/quizByUniqueCode', { "uniqueCode": code }).then(function (data) {
            console.log(data.data.message)
            if (data.data.message === undefined) {
                console.log('quiz', data.data.quiz)
                $rootScope.sdetails = data.data.quiz
                $scope.showStart = true;
            }
            else {
                myFact.Message('danger', data.data.message)
                document.querySelector('.codeVal').value = "";
            }

        }).catch(function (err) {
            console.log(err)
        })
    }

    $scope.quizShow = function (code) {

        $http.post('https://marksup-adgitm.herokuapp.com/get/quizByUniqueCode', { uniqueCode: code }).then(function (data) {
            $rootScope.squiz = data.data.quiz;
            console.log($rootScope.squiz)
        }).catch(function (err) {
            console.log(err)
        })
    }

    $scope.cancelQuiz = function () {
        $scope.showStart = false;
        document.querySelector('.codeVal').value = "";
    }

   
    $scope.counterFn = function (n) {
        $scope.counter = $scope.sdetails.questionList[n].time;
        var x = $interval(function () {
            if ($scope.counter < 6) {
                document.querySelector('.timer').style.backgroundColor = "red";
            }
            if ($scope.counter >= 6) {
                document.querySelector('.timer').style.backgroundColor = "lightskyblue";
            }
            if ($scope.counter == 0) {  
                    $interval.cancel(x);
                $scope.studentQuizAnserFN();
            }
            document.querySelector('.timer').textContent = $scope.counter--;
        }, 1000)
        

    }

    $scope.goToTestPage = function () {
        $location.path("/test")
        $scope.counterFn(0)
    }

    $scope.endTestFn = function () {
        $location.path('/student-dashboard')
    }
    $scope.quesNo = 0;

    $scope.studentQuizAnserFN = function () {
        
    
        if ($scope.quesNo === $rootScope.sdetails.questionList.length - 1) {
            document.querySelector('.next').textContent = "submit";
            console.log($scope.quesNo)
            document.querySelector('.quizQuestion').textContent = $rootScope.sdetails.questionList[$scope.quesNo].Question
            document.querySelector('.o1').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionA
            document.querySelector('.o2').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionB
            document.querySelector('.o3').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionC
            document.querySelector('.o4').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionD

            

            $scope.quesNo++;
        }        
        else {
            $scope.quesNo++;
            document.querySelector('.quizQuestion').textContent = $rootScope.sdetails.questionList[$scope.quesNo].Question
            document.querySelector('.o1').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionA
            document.querySelector('.o2').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionB
            document.querySelector('.o3').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionC
            document.querySelector('.o4').textContent = $rootScope.sdetails.questionList[$scope.quesNo].OptionD
            document.querySelector('.timer').textContent = $scope.sdetails.questionList[$scope.quesNo].time

            document.querySelector('.i1').checked=false;
            document.querySelector('.i2').checked=false;
            document.querySelector('.i3').checked=false;
            document.querySelector('.i4').checked=false;

            $scope.counterFn($scope.quesNo)
            
        }
    }


$scope.ansArr =[];
    $scope.saveFN=function(){

        if ($scope.quesNo === $rootScope.sdetails.questionList.length ){
            console.log('submit ans through api')
            console.log($scope.ansArr)
            // $http.post('',$scope.ansArr).then(function(data)
            // {
            //     console.log(data);
            // }).catch(function(data){
            //     console.log(err)
            // })
    }
    else{
        var ans = 'no answer';
        if (document.querySelector('.i1').checked) {
            ans = $rootScope.sdetails.questionList[$scope.quesNo ].OptionA
        }
        if (document.querySelector('.i2').checked) {
            ans = $rootScope.sdetails.questionList[$scope.quesNo].OptionB
        }
        if (document.querySelector('.i3').checked) {
            ans = $rootScope.sdetails.questionList[$scope.quesNo].OptionC
        }
        if (document.querySelector('.i4').checked) {
            ans = $rootScope.sdetails.questionList[$scope.quesNo].OptionD
        }
        var data ={
            ans:ans,
            time:document.querySelector('.timer').textContent
        }
        $scope.ansArr.push(data);
        
        $scope.quesNo++;
    }
    }

    
})