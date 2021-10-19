// routing
angular.module('myroute', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "templates/main.html"
    })
    .when("/teacher-Login", {
      templateUrl : "templates/teacherTemplates/teacherLogin.html",
      controller:'teacherController'
    })
    .when("/student-Login", {
        templateUrl : "templates/studentTemplates/studentLogin.html",
        controller:'studentController'
      })
      .when("/student-signup", {
        templateUrl : "templates/studentTemplates/studentSignup.html",
        controller:'studentController'
      })
      .when("/teacher-signup", {
        templateUrl : "templates/teacherTemplates/teacherSignup.html",
        controller:'teacherController'
      })
      .when("/teacher-dashboard", {
        resolve: {
          function($location,myFact) {
            console.log(localStorage.getItem('token'))
              if (localStorage.getItem('token')===null || localStorage.getItem('token')==='' || localStorage.getItem('role')!=='teacher' ) {
                  myFact.Message('danger',"You Are Not Allow To Access This Page")
                  $location.path('/')
              }
          }
      },
        templateUrl : "templates/teacherTemplates/teacherDashboard.html",
        controller: 'createQuizController'
      })

      .when("/student-dashboard", {
        resolve: {
          function($location,myFact) {
              if (localStorage.getItem('token')===null || localStorage.getItem('token')==='' || localStorage.getItem('role')!=='student') {
                  myFact.Message('danger',"You Are Not Allow To Access This Page")
                  $location.path('/')
              }
          }
      },
        templateUrl : "templates/studentTemplates/studentDashboard.html",
        controller: 'studentDashboardController'
      })

      
      .when("/viewQuiz", {
        resolve: {
          function($location,myFact) {
              if(localStorage.getItem('token')===null || localStorage.getItem('token')==='' || localStorage.getItem('role')!=='teacher' ){
                  myFact.Message('danger',"You Are Not Allow To Access This Page")
                  $location.path('/')
              }
          }
      },
        templateUrl : "templates/teacherTemplates/viewQuiz.html",
        controller: 'createQuizController'
      })

      .when("/editQuiz", {
        resolve: {
          function($location,myFact) {
              if(localStorage.getItem('token')===null || localStorage.getItem('token')==='' || localStorage.getItem('role')!=='teacher' ){
                  myFact.Message('danger',"You Are Not Allow To Access This Page")
                  $location.path('/')
              }
          }
      },
        templateUrl : "templates/teacherTemplates/quizEdit.html",
        controller: 'editQuizController'
      })
    
  });