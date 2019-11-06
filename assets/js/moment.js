// (function()
// {
//   // instantiate a moment object
//   var NowMoment = moment();

//   // instantiate a JavaScript Date object
//   var NowDate = new Date();

//   // display value of moment object in #displayMoment div
//   var eDisplayMoment = document.getElementById('displayMoment');
//   eDisplayMoment.innerHTML = NowMoment.format('YYYY');

//   // display value of Date object in #displayJsDate div
//   var eDisplayDate = document.getElementById('displayJsDate');
//   eDisplayDate.innerHTML = NowDate;
// })();

var d = new Date();
document.getElementById("displayMoment").innerHTML = d.getFullYear();
