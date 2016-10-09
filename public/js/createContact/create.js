angular.module('createContact', [])
.config(function ($stateProvider) {
	$stateProvider
		.state("contact.create", {
			url: '/create',
			views: {
				'main@': {
					controller: "CreateCtrl as createCtrl",
					templateUrl: "../../html/createContact/create.tmpl.html"
				}
			}
		});
})
.controller('CreateCtrl', ['$scope', function CreateCtrl($scope){
	$scope.form = {};

	$scope.onSubmit = function (valid) {
		if(valid){
			console.log("Hey i'm submitted!");
			console.log($scope.form);
		} else {
			console.log("Invalid Form!");
		}
	};

	// $scope.fakeData = function () {
	// 	$scope.form.name =
	// };
}]);
//var faker = require('faker');