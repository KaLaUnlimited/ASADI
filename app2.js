//   // Initialize Firebase



var flightData_ref= firebase.database().ref('Site/FlightData/')

///////////////////////////////////////////////////////search method  record///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var startDate=$("#Start-Date").val().trim();



$("#search").on("click", function(event){
  event.preventDefault();

 var startDate=$("#Start-Date").val().trim();

search(startDate);



});



function search(start){

flightData_ref
  .orderByChild("dateLogged")
 .equalTo(start)
  
  .once('value')
  .then(function(records) {
  var recObj = records.val();
  console.log("Key: " + records.key)
  console.log(recObj);
  $("#search-report-table > tbody").empty();

for(var child in recObj){
 //flightData_ref.on("child_added", function(records){
 	console.log("this is the child key: " +child);
  $("#search-report-table > tbody").append("<tr data-key="+ child+ "><td>" + recObj[child].dateLogged + "</td><td>"+ recObj[child].loggedBy
  + "</td><td>" +recObj[child].timeLogged+ "</td><td>" +recObj[child].system+ "</td><td>"  + recObj[child].systemStatus + "</td><td>" 
  + recObj[child].flightAltitude + "</td><td>" + recObj[child].reasonMoored + "</td><td>" 
  + recObj[child].Launches + "</td><td>"+ recObj[child].recoveries+ "</td><td>" +recObj[child].tetherTension + "</td><td>" +recObj[child].groundWinds 
  + "</td><td>"+recObj[child].windsAloft + "</td><td>"+recObj[child].groundTemp + "</td><td>"+ recObj[child].barometricPressure + "</td><td>"+recObj[child].pitch 
  + "</td><td>"+recObj[child].heliumPressure + "</td><td>"+recObj[child].ballonetPressure + "</td><td>"+recObj[child].notes + "</td><td><button id='upDateRec' data-toggle='modal' data-target='#exampleModal' data-key="
  + child + ">Update Record</button></td></tr>" );


}

})
};





/////////////////////////////////////////////////////////////////////////////////update a record///////////////////////////////////////////////////////////////////////////////////
var key;
$(document).on('click', "#upDateRec", function(){
	console.log("test");
	key = $(this).parents('tr').data('key');
	console.log("upate button" + key);

});

$("#saveModal").on("click", function(){

   dateLogged =$("#Date-Input").val().trim();
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
	


	console.log(dateLogged)

	console.log(key);


	   flightData_ref.child(key).set({
	   dateLogged: dateLogged,
	   timeLogged: timeLogged,
	   loggedBy:loggedBy,
	 //  system:system,
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
	});



search(dateLogged);
	});



























