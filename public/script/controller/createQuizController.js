
// ************************Teacher Controller*********************
app.directive('myDirective',function(){
    return function(scope, element, attrs){
         element.click(function(){
             console.log(element.parent().children('.modal-body'))
             element.parent().parent().children('.modal-body').append(`
              <div>    
        <div class="modal-body" id="modal-body">
            <div class="form-group">
                <!-- <label for="quizName" class="col-md-2 control-label quizHeadingDetails"> Write question</label> -->
                <div class="col-md-12">
                    <textarea type="text" placeholder="Write Question Here" class="form-control quizHeadingDetails" ></textarea>
                </div>
            </div>
<br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 1">
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 2" >
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 3">
              </div>
          </div>
          <br>
            <div class="form-group">
              
              <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Option 4">
              </div>
          </div>
           
       
          <br>
          <div class="form-group">
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Correct Answer">
            </div>
          </div>
        </div>
       
        </div>
              `)
          })
     }
})



app.controller('createQuizController', function ($scope, $http, $rootScope, $location) {
    $scope.quizStart = false; 
    $scope.sectionShow = false; 

    $scope.showQuizHeadingDetails=function(){
        $scope.quizStart = true; 
    }

    $scope.showSection=function(){
        $scope.sectionShow = true; 
    }


})