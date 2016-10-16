try {
	if(ENV){
		ENV = JSON.parse(ENV);
	}

	var config = {
  	apiKey: ENV.API_KEY,
		authDomain: ENV.AUTH_DOMAIN,
		databaseURL: ENV.DATABASE_URL,
		storageBucket: ENV.STORAGE_BUCKET,
		messagingSenderId: Number(ENV.MESSAGING_SENDER_ID)
	};

	firebase.initializeApp(config);
} catch (e) {
	console.log("environment variables not found.");
}

var firebaseRef = firebase.database().ref();
var contactsRef = firebaseRef.child('contacts');