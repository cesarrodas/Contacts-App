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
	$scope.create = $scope.$parent.addContact;

	$scope.onSubmit = function (valid) {
		if(valid){
			$scope.create($scope.form);
		} else {
			console.log("Invalid Form!");
		}
	};

	$scope.randomNumber = function() {
		var number = Math.floor(Math.random() * 10000000000);
		return number;
	};

	$scope.fakeData = function () {
		$scope.form.name = faker.name.findName();
		$scope.form.email = faker.internet.email();
		$scope.form.address = faker.address.streetAddress();
		$scope.form.phone = $scope.randomNumber();
		$scope.form.bio = faker.lorem.sentence();
		$scope.form.avatar = faker.image.avatar();
	};
}]);