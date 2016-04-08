'use strict';

var app = angular.module('myApp', []);


app.filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});



            app.directive('loginForm', [function(){
            var output = {
                replace: "true",
          templateUrl: 'loginform.html'
            
            };
            return output;
            
            
            }]);
        
        

        

        

         
         app.service('caseservice', function(){
            this.titleCase = function(n) {
                
                       var abe = n.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {

            if (i !== abe.length-1)
            {
                res += (abe[i] + "-");
            }
            else
            {
                res += (abe[i]);
            }

        }
        return res;
            };
            this.camelCase = function(n) {
                var abe = n.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {
            var a = abe[i].slice(0, 1);

            var b = abe[i].slice(1, abe[i].length);

            res += (a.toUpperCase() + b);

        }
        return res;
            };
             this.dashCase = function(n) {
                      var abe = n.split(" ");
        var res = "";

        for (var i = 0; i < abe.length; i++)
        {
            var a = abe[i].slice(0, 1);
//            console.log(a);
            var b = abe[i].slice(1, abe[i].length);
//            console.log(b);
            res += (a.toUpperCase() + b + " ");

        }
        return res;
            };
         });
         
         app.controller('casecontroller', ["$scope", "caseservice", function($scope, caseservice) {
                 
            $scope.titleCase = caseservice.titleCase("number humpa tre");
            $scope.camelCase = caseservice.camelCase("number humpa tre");
            $scope.dashCase = caseservice.dashCase("number humpa tre");

         }]);



app.controller('namesCtrl', ["$scope", function($scope) {
    $scope.names = {
        firstname: 'Jani',
        lastname: 'Carl'
    };
}]);

app.filter('name', function() {
    return function(x) {
        
        
       
      return "Firstname: " + x.firstname + ", Lastname: " + x.lastname;
        
        };
       
    });
    
    
    app.controller('tablecontrol', function($scope) {
    $scope.email = "John",
    $scope.password = "Doe"
});
