
// In index.html

  <!-- Toaster
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="http://code.angularjs.org/1.2.0/angular-animate.min.js" ></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.4/toaster.js"></script>



    <!-- Toaster
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="http://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/0.4.4/toaster.css" rel="stylesheet" />


// In app.js

  var app = angular.module('fashionphile', [ 'ui.router', 'editer', 'toaster']);


// In CustomerCtrl.js

  $scope.pop = function(name){
      toaster.pop('success', "Sucess", "name");
  };