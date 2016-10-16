angular.module('contactApp.models.contacts', ['toaster'])
.service('ContactsService', function (toaster) {
	var model = this;

	model.createContact = function (contact) {
		contactsRef.push(contact);
		toaster.pop('success', 'Contact created!');
	};

	model.updateContact = function (contactId, updatedContact) {
		var personRef = contactsRef.child(contactId);
		personRef.update(updatedContact);
		toaster.pop('success', 'Contact updated!');
	};

	model.removeContact = function (contactId) {
		var personRef = contactsRef.child(contactId);
		personRef.remove();
	};


});