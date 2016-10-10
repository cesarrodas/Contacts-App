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
			},
			params: {
				person: null,
				id: null
  		}
		});
})
.controller('CreateCtrl', ['$scope', '$state','$stateParams', function CreateCtrl($scope, $state, $stateParams){
	$scope.create = $scope.$parent.addContact;
	$scope.personToEdit = $stateParams.person;
	$scope.personToEditId = $stateParams.id;
	$scope.form = $scope.personToEdit ? $scope.personToEdit : {};
	$scope.submitting = false;

	$scope.onSubmit = function (valid) {
		$scope.submitting = true;
		if(valid){
			$scope.create($scope.form);
			$scope.form = {};
			window.setTimeout(function(){
				$scope.$apply(function(){
					$scope.submitting = false;
				});
			}, 300);
		} else {
			window.setTimeout(function(){
				console.log("Invalid Form!");
				$scope.$apply(function(){
					$scope.submitting = false;
				});
			}, 300);
		}
	};

	$scope.update = function(id, updatedContact){
		$scope.submitting = true;
		$scope.$parent.changeContact(id, updatedContact);
		$scope.form = {};
		window.setTimeout(function(){
			$scope.$apply(function(){
				$scope.submitting = false;
				$state.go('contact.contacts');
			});
		}, 300);
	}

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