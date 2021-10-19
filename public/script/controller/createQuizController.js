
// ************************Teacher Controller*********************
app.directive('myDirective', function () {
    return function (scope, element, attrs) {
        element.click(function () {
            element.parent().parent().children('.modal-body').append(`
            <div class="form-group">
                <!-- <label for="quizName" class="col-md-2 control-label quizHeadingDetails"> Write question</label> -->
                <div class="col-md-12">
                    <textarea type="text" placeholder="Write Question Here" class="form-control quizHeadingDetails" ng-model="question" ></textarea>
                </div>
            </div>
<br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 1" ng-model='opt1'>
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 2" ng-model='opt2'>
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 3" ng-model='opt3'>
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 4" ng-model='opt4'>
              </div>
          </div>
           
       
          <br>
          <div class="form-group">
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Correct Answer" ng-model='corrAns'>
            </div>
          </div>
          <br>
          <div class="form-group">
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Time" ng-model='quesTime'>
            </div>
          </div>

         
              `)
        })
    }
})



app.controller('createQuizController', function ($scope, $http, $rootScope, $location,myFact) {
    $scope.quizStart = false;
    $scope.sectionShow = false;
    $scope.sectionShow2=false;

    $scope.showQuizHeadingDetails = function () {
        $scope.quizStart = true;
    }

    
    $scope.showSection = function (quizName, totalMarks, Stime, Etime,UnqiueCode) {
        if (quizName === undefined || totalMarks === undefined || Stime === undefined || Etime === undefined || UnqiueCode===undefined) {
            myFact.Message('danger','Enter all fields')
        }
        else {
            $scope.myQuizData={
                uniqueCode:UnqiueCode,
                name:quizName,
                startTime:Stime,
                totalMarks:totalMarks,
                endTime:Etime
            }
            $scope.sectionShow = true;
        }

    }
$scope.arr = [];
    $scope.createQuizArr=function(data){
        $scope.arr.push(data);
    
    }

    $scope.createQuiz=function(question,opt1,opt2,opt3,opt4,corrAns,quesTime){
        if(question===undefined || opt1 ===undefined ||opt2 ===undefined || opt3 ===undefined || opt4 ===undefined || corrAns ===undefined ||quesTime ===undefined )
        {
                myFact.Message('danger','Enter all field');
        }
        else{
        var data={
            Question:question,
            OptionA:opt1,
            OptionB:opt2,
            OptionC:opt3,
            OptionD:opt4,
            CorrectAnswer:corrAns,
            time:quesTime
        }
        console.log(data)
        $scope.createQuizArr(data)
    }
    }
    
    $scope.lock=function(question,opt1,opt2,opt3,opt4,corrAns,quesTime){
        if(question===undefined || opt1 ===undefined ||opt2 ===undefined || opt3 ===undefined || opt4 ===undefined || corrAns ===undefined ||quesTime ===undefined )
            {
                    myFact.Message('danger','Enter all field');
            }
            else{
                
        $scope.sectionShow2=true;
        var data={
            Question:question,
            OptionA:opt1,
            OptionB:opt2,
            OptionC:opt3,
            OptionD:opt4,
            CorrectAnswer:corrAns,
            time:quesTime
        }
        console.log(data)
        $scope.createQuizArr(data)
    }
    }
    $scope.submitQuiz=function(){
        $scope.myQuizData['questionList']=$scope.arr;

        var mydata = $scope.myQuizData
       console.log(mydata)
        // $http.post("https://marksup-adgitm.herokuapp.com/quiz/create",data).then(function (response) {
        //     if(response.status===200){
        //         myFact.Message('success','Quiz Created')
        //     }
            

        // }).catch(function (error) {
        //     console.log(error);
        // })

    }

    $scope.teacherlogoutFn=function(){
        localStorage.setItem('token',"");
        $location.path("/")
        myFact.Message('danger','LogOut Successfully')
    }



    // *********************view Quiz****************8

    $scope.viewQuizOfTeacher = function(){
        $http.get('https://marksup-adgitm.herokuapp.com/get/teacher/quizes').then(function(data){
          
           $scope.Tquiz = data.data.quizes
          
           
        }).catch(function(err){
            console.log(err)
        })
    }
    $scope.viewQuizOfTeacher();

    $scope.UpdateQuiz=function(code){
        console.log(code)
        $http.post('https://marksup-adgitm.herokuapp.com/get/quizByUniqueCode',{uniqueCode:code}).then(function(data){
            $location.path('/editQuiz')
            $rootScope.QuizAccToCode = data.data.quiz;
            console.log($rootScope.QuizAccToCode)
        }).catch(function(err){
            console.log(err)
        })
    }

    
    
})