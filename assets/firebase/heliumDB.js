/* global moment firebase */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzntWHt0eQrf8_T7sNXd7HDcmHmJQK-xM",
  authDomain: "realtime-d6489.firebaseapp.com",
  databaseURL: "https://realtime-d6489.firebaseio.com",
  projectId: "realtime-d6489",
  storageBucket: "realtime-d6489.appspot.com",
  messagingSenderId: "540451789449"
};
firebase.initializeApp(config);

// Create a variable to reference the database
//var database = firebase.database();

// Initial Values
//Save Helium Data info
// 2. Button for adding Employees
function saveHeliumData() {

 event.preventDefault();

  var cont1 = $("#inputHContainer1").val().trim();
  var cont2 = $("#inputHContainer2").val().trim();
  var cont3 = $("#inputHContainer3").val().trim();
  var cont4 = $("#inputHExpended").val().trim();
  var inEx = $("#inputHExpended").val().trim();
  var loggedBy = $("#inputLoggedBy").val().trim();
  var note = $("#txtAreaNotes").val().trim();
  var inTLog = $("#inputTimeLogged").val().trim();

  var HeliumData = {
    HeliumContainer1: cont1,
    HeliumContainer2: cont2,
    HeliumContainer3: cont3,
    HeliumContainer4: cont4,
    HeliumExpended: inEx,
    LoggedBy: loggedBy,
    Notes: note,
    TimedLogged: inTLog,
    createDate: firebase.database.ServerValue.TIMESTAMP
  }

firebase.database().ref('Site/HeliumData/').push(HeliumData);
.log("Update Success");
}


firebase.database().ref('Site/HeliumData/').on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.

  var cont1 = childSnapshot.val().HeliumContainer1;
  var cont2 = childSnapshot.val().HeliumContainer2;
  var cont3 = childSnapshot.val().HeliumContainer3;
  var cont4 = childSnapshot.val().HeliumContainer4;
  var inEx = childSnapshot.val().HeliumExpended;
  var loggedBy = childSnapshot.val().LoggedBy;
  var note = childSnapshot.val().Notes;
  var inTLog = childSnapshot.val().TimedLogged;


  // Employee Info
  console.log("Testing reading " + cont1);
  console.log("Testing reading " + cont2);
  console.log("Testing reading " + cont3);
  console.log("Testing reading " + cont4);


  // Add each train's data into the table
  $("#helium-status-table > tbody").append("<tr><td>" + cont1 + "</td><td>" + cont2 + "</td><td>" +
  cont3 + "</td><td>" + cont4 + "</td><td>" + inEx + "</td></tr>");
});
