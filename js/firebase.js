

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var presenceRef = firebase.database().ref("disconnectmessage");
// Write a string when this client loses connection
presenceRef.onDisconnect().set("I disconnected!");
