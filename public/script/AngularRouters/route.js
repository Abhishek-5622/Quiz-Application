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
        templateUrl : "templates/studentTemplates/studentLogin.html"
      })
      .when("/student-signup", {
        templateUrl : "templates/studentTemplates/studentSignup.html"
      })
      .when("/teacher-signup", {
        templateUrl : "templates/teacherTemplates/teacherSignup.html",
        controller:'teacherController'
      })
      .when("/teacher-dashboard", {
        templateUrl : "templates/teacherTemplates/teacherDashboard.html",
        controller: 'createQuizController'
      })

      .when("/admin-login", {
        templateUrl : "templates/adminTemplates/adminLogin.html"
       
      })
      .when("/viewQuiz", {
        templateUrl : "templates/teacherTemplates/viewQuiz.html"
       
      })
    
  });