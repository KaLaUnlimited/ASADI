
//alert("testing!");

//   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzntWHt0eQrf8_T7sNXd7HDcmHmJQK-xM",
    authDomain: "realtime-d6489.firebaseapp.com",
    databaseURL: "https://realtime-d6489.firebaseio.com",
    projectId: "realtime-d6489",
    storageBucket: "realtime-d6489.appspot.com",
    messagingSenderId: "540451789449"
  };
  firebase.initializeApp(config);


var flightData_ref= firebase.database().ref('Site/FlightData/')
  var timeLogged ;
  var loggedBy;
  var systemStatus;
  var flightAltitude;
  var reasonMoored;
  var launches ;
  var recoveries;
  var tetherTension;
  var groundWinds;
  var windsAloft ;
  var groundTemp;
  var barometricPressure;
  var pitch;
  var heliumPressure;
  var ballonetPressure;
  var flightAltitude;
  var reasonMoored;
  var Launches;
  var notes;



var database =firebase.database();

$("#log").on("click", function(event){
  event.preventDefault();
   timeLogged =$("#Time-Logged-Input").val().trim();
   loggedBy=$("#Logged-By-Input").val().trim();
   systemStatus=$("#System-Status-Input").val().trim();
   flightAltitude=$("#Flight-Altitude-Input").val().trim();
   reasonMoored=$("#Reason-Moored-Input").val().trim();
   Launches =$("#Launches-Input").val().trim();
   recoveries=$("#Recoveries-Input").val().trim();
   tetherTension=$("#Tether-Tension-Input").val().trim();
   groundWinds=$("#Ground-Winds-Input").val().trim();
   windsAloft =$("#Winds-Aloft-Input").val().trim();
   groundTemp=$("#Ground-Temp-Input").val().trim();
   barometricPressure=$("#Barometric-Pressure-Input").val().trim();
   pitch =$("#Pitch-Input").val().trim();
   heliumPressure=$("#Helium-Pressure-Input").val().trim();
   ballonetPressure=$("#Ballonet-Pressure-Input").val().trim();
   notes= $("#Notes").val().trim();



  var FlightData={
   timeLogged: timeLogged,
   loggedBy:loggedBy,
   systemStatus:systemStatus,
   flightAltitude:flightAltitude,
   reasonMoored:reasonMoored,
   Launches:Launches,
   recoveries:recoveries,
   tetherTension:tetherTension,
   groundWinds:groundWinds,
   windsAloft:windsAloft,
   groundTemp:groundTemp,
   barometricPressure:barometricPressure,
   pitch:pitch,
   heliumPressure:heliumPressure,
   ballonetPressure:ballonetPressure,
   notes:notes
  };
  console.log(FlightData);

    firebase.database().ref('Site/FlightData/').push(FlightData);
   // firebase.database().ref('Site/HeliumData/').push(FlightData);
    loggedBy=$("#Logged-By-Input").val("");
    timeLogged =$("#Time-Logged-Input").val("");
    systemStatus=$("#System-Status-Input").val("");
    flightAltitude=$("#Flight-Altitude-Input").val("");
    reasonMoored=$("#Reason-Moored-Input").val("");
    Launches =$("#Launches-Input").val("");
    recoveries=$("#Recoveries-Input").val("");
    tetherTension=$("#Tether-Tension-Input").val("");
    groundWinds=$("#Ground-Winds-Input").val("");
    windsAloft =$("#Winds-Aloft-Input").val("");
    groundTemp=$("#Ground-Temp-Input").val("");
    barometricPressure=$("#Barometric-Pressure-Input").val("");
    pitch =$("#Pitch-Input").val("");
    heliumPressure=$("#Helium-Pressure-Input").val("");
    ballonetPressure=$("#Ballonet-Pressure-Input").val("");
    notes= $("#Notes").val("");



});


flightData_ref.on("child_added", function(snap){

console.log(loggedBy);

//$(".display").append(snap.val().Kavodel);
//console.log("value of timelogged:" + snap.val().timeLogged);
$("#report-table> tbody").html("<tr><td>" + snap.val().loggedBy
  + "</td><td>" +snap.val().timeLogged+ "</td><td>"  + snap.val().systemStatus + "</td><td>" 
  + snap.val().flightAltitude + "</td><td>" + snap.val().reasonMoored + "</td><td>" 
  + snap.val().Launches + "</td><td>"+ snap.val().recoveries+ "</td><td>" +snap.val().tetherTension + "</td><td>" +snap.val().groundWinds 
  + "</td><td>"+windsAloft + "</td><td>"+snap.val().groundTemp + "</td><td>"+snap.val().barometricPressure + "</td><td>"+snap.val().pitch 
  + "</td><td>"+snap.val().heliumPressure + "</td><td>"+snap.val().ballonetPressure + "</td><td>"+snap.val().notes + "</td></tr>" );



$("#full-report-table > tbody").append("<tr><td>" + snap.val().loggedBy
  + "</td><td>" +snap.val().timeLogged+ "</td><td>"  + snap.val().systemStatus + "</td><td>" 
  + snap.val().flightAltitude + "</td><td>" + snap.val().reasonMoored + "</td><td>" 
  + snap.val().Launches + "</td><td>"+ snap.val().recoveries+ "</td><td>" +snap.val().tetherTension + "</td><td>" +snap.val().groundWinds 
  + "</td><td>"+windsAloft + "</td><td>"+snap.val().groundTemp + "</td><td>"+snap.val().barometricPressure + "</td><td>"+snap.val().pitch 
  + "</td><td>"+snap.val().heliumPressure + "</td><td>"+snap.val().ballonetPressure + "</td><td>"+snap.val().notes + "</td></tr>" );


})



////////////search record///////////

//input timed Logged
//pull all items with that time logged
//separate by time logg



// movie_ref
//   .orderByChild('timeLogged')
//   .equalTo('2000')
//   .startAt('2000')
//   .endAt('2018')
//   .once('value')
//   .then(function(movie) {
//   console.log(movie.val());
// });


