angular.module('contacts', [])
.config(function ($stateProvider) {
	$stateProvider
		.state("contact.contacts", {
			url: '/',
			views: {
				'main@': {
					controller: "ContactCtrl",
					templateUrl: "../../html/contacts/contacts.tmpl.html"
				}
			}
		});
})
.controller('ContactCtrl', function ContactCtrl(){
	var contactCtrl = this;
});