angular.module('contactApp', ['contactApp.models.contacts'])

.controller('mainController', ['$scope', 'ContactsService', function($scope, ContactsService){
	$scope.contacts;

	ContactsService.getContacts().then(function(snapshot){
			console.log(snapshot.key, snapshot.val());
			var people = [];
			var person = [];
			snapshot.forEach(function(childSnapshot) {
      	var key = childSnapshot.key;
      	var childData = childSnapshot.val();
      	person.push(key);
      	person.push(childData);
        people.push(person);
  		});
  		$scope.$apply(function (){
  			$scope.contacts = JSON.stringify(people);
  		});
		},
		function (e) {
			console.log("Could not retrieve Contacts", e)
		});
}]);

/*
angular.module('contactApp', ['firebase'])

.controller('mainController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){

	var ref = firebase.database().ref();
	$scope.name = $firebaseObject(ref);
	// $scope.people = $http.get('../json/people.json').success(function(data){
	// 	console.log("GOT THAT DATA BRO");
	// 	console.log(data);
	// });
}]);
*/

