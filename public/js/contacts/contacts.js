angular.module('contacts', [])
.config(function ($stateProvider) {
	$stateProvider
		.state("contact.contacts", {
			url: '/',
			views: {
				'main@': {
					controller: "mainController",
					templateUrl: "../../html/contacts/contacts.tmpl.html"
				}
			}
		});
})
// .controller('ContactCtrl', ['$scope', function ContactCtrl($scope){
// 	//$scope.deleteContact = $scope.$parent.delContact;
// }]);