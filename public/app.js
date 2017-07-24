 var app=angular.module("fileApp",[]);

  app.controller('fileController',['$scope', function($scope){
  $scope.file = ''; //this is not necessary, could leave blank and angular would auto create it.  For clarity im leaving it in
  }]);
//controller is a mini app
//scope connects html and javascript variables

