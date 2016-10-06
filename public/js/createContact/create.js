angular.module('createContact', [])
.config(function ($stateProvider) {
	$stateProvider
		.state("contact.create", {
			url: '/create',
			views: {
				'main@': {
					controller: "CreateCtrl",
					templateUrl: "../../html/createContact/create.tmpl.html"
				}
			}
		});
})
.controller('CreateCtrl', function CreateCtrl(){
	var createCtrl = this;
});