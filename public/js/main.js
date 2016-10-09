angular.module('contactApp', ['ui.router', 'contacts', 'createContact','contactApp.models.contacts'])

.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('contact', {
			url: '',
			abstract: true
	});

	$urlRouterProvider.otherwise('/');

})

.controller('mainController', ['$scope', 'ContactsService', function($scope, ContactsService){
	$scope.keys;
	$scope.contacts;

	$scope.addContact = function(contact){
		ContactsService.createContact(contact);
	};

	$scope.changeContact = function(id, updatedContact) {
		// var updating = $scope.keys[0];
		// var fakeContact = {
		// 	name: "Philip Defranco",
		// 	age: 28,
		// 	bio: "was up"
		// }
		ContactsService.updateContact(id, updatedContact);
	};

	$scope.delContact = function(contactId){
		$(".modal-backdrop").hide();
		ContactsService.removeContact(contactId);
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

	// Updates all the contacts
	contactsRef.on("value", function(snapshot) {
		$scope.keys = Object.keys(snapshot.val());
		$scope.contacts = snapshot.val();
	}, function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	});

}]);