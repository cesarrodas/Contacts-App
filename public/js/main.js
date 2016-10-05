angular.module('contactApp', ['contactApp.models.contacts'])

.controller('mainController', ['$scope', 'ContactsService', function($scope, ContactsService){
	$scope.keys;
	$scope.contacts;

	$scope.addContact = function(){
		var fakeContact = {
			name: "Candace",
			age: 20,
			bio: "this is my line"
		}
		ContactsService.createContact(fakeContact);
	};

	$scope.changeContact = function() {
		var updating = $scope.keys[0];
		var fakeContact = {
			name: "Philip Defranco",
			age: 28,
			bio: "was up"
		}
		ContactsService.updateContact(updating, fakeContact);
	};

	$scope.delContact = function(){
		var deleting = $scope.keys[0];
		ContactsService.removeContact(deleting);
	};

	$scope.getAllContacts = function() {
		contactsRef.once("value", function(snapshot) {
			$scope.$apply(function(){
				$scope.keys = Object.keys(snapshot.val());
				$scope.contacts = snapshot.val();
			});
		}, function (errorObject) {
  		console.log("Failed to load Contacts " + errorObject.code);
		});
	}

	contactsRef.on("value", function(snapshot) {
		$scope.keys = Object.keys(snapshot.val());
		$scope.contacts = snapshot.val();
	}, function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});

}]);

