// interceptor 
angular.module('myInterceptor', []).config(function ($httpProvider) {
    $httpProvider.interceptors.push(["$rootScope", function ($rootScope, $q) {
        return {
            request: function(config) {
             
                var token = localStorage.getItem('token');
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token; // add your token from your service or whatever
                
                return config;
              },
            requestError: function (rejection) {
            
                // Contains the data about the error on the request and return the promise rejection.    
                return $q.reject(rejection);
            },
            response: function (result) {
               
                return result;
            },
            // handle request response
            responseError: function (response) {
                
                //Check different response status.   
                if (response.status === 400) {
                    $rootScope.ErrorMsg = "Bad Request";
            
                }
                if (response.status === 401) {
                    $rootScope.ErrorMsg = "Unauthorized User";
                    
                }

                if (response.status === 500) {
                    $rootScope.ErrorMsg = "Internal Server Error";
                    
                }

                if (response.status === 404) {
                    $rootScope.ErrorMsg = "Request Not Found";
                   
                }
                return response;
            }
        };
    }]);
});