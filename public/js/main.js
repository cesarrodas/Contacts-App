angular.module('contactApp', ['firebase'])

.controller('mainController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){

	var ref = firebase.database().ref();
	$scope.name = $firebaseObject(ref);
	// $scope.people = $http.get('../json/people.json').success(function(data){
	// 	console.log("GOT THAT DATA BRO");
	// 	console.log(data);
	// });
}]);

