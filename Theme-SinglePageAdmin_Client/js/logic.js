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

/* Charting Data**/
var groundWinds = [];
var windsAloft = [];
var flightAltitude = [];
var tetherTension = [];

firebase.database().ref('Site/FlightData/').orderByChild("dateLogged")//dateLogged)
  .limitToLast(24)
  .once('value')
  .then(function(records) {
  var recObj = records.val();
  $("#search-report-table > tbody").empty();
  for(var child in recObj){
    console.log("groundWinds " + parseInt(recObj[child].groundWinds));
    groundWinds.push(Number(recObj[child].groundWinds));
   windsAloft.push(Number(recObj[child].windsAloft));
   flightAltitude.push(Number(recObj[child].flightAltitude));
   tetherTension.push(Number(recObj[child].tetherTension));
  }
});

new Chart(document.getElementById("line-chart"), {
type: 'line',
data: {
  labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
  datasets: [{
      data: [86,114,106,106,107,111,133,221,783,2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [282,350,411,502,635,809,947,1402,3700,5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }, {
      data: [168,170,178,190,203,276,408,547,675,734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false
    }, {
      data: [40,20,10,16,24,38,74,167,508,784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false
    }, {
      data: [6,3,2,2,7,26,82,172,312,433],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }
  ]
},
options: {
  title: {
    display: true,
    text: 'World population per region (in millions)'
  }
}
});


// var ctx = document.getElementById("line-chart");
//     console.log ("Bradshaw :" + ctx);
//
//     var lnChart = new Chart(ctx, {
//
//         type: 'line',
//   data: {
//     labels: ["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00"],
//     datasets: [{
//         data: groundWinds,
//         label: "Ground Wind Speed",
//         borderColor: "#3e95cd",
//         fill: false
//       }, {
//         data: flightAltitude,
//         label: "Airborne Wind Speed",
//         borderColor: "#8e5ea2",
//         fill: false
//       }, {
//         data: windsAloft,
//         label: "API ind Speed",
//         borderColor: "#3cba9f",
//         fill: false
//       }, {
//         data: tetherTension,
//         label: "Tether Tension",
//         borderColor: "#e8c3b9",
//         fill: false
//       }
//     ]
//   },
//         options: {
//           title: {
//       display: true,
//       text: 'Top Gun System Metrics'
//     }
//   }
//     });
