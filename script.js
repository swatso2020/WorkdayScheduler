var eightAm = $("#text-8")
var nineAm = $("#text-9")
var tenAm = $("#text-10")
var elevenAm = $("#text-11")
var twelevePm = $("#text-12")
var onePm = $("#text-13")
var twoPm = $("#text-14")
var threePm = $("#text-15")
var fourPm = $("#text-16")
var fivePm = $("#text-17")
var sixPm = $("#text-18")
var sevenPm = $("#text-19")
var eightPm = $("#text-20")
var ninePm = $("#text-21")
var tenPm = $("#text-22")
var elevenPm = $("#text-23")
var now = moment().format('MMMM Do YYYY');
var saveIcon = "./images/save-regular.svg"

const checkTimes = () => {
    var currentTime = moment().hour();
    if (currentTime >= 9 && currentTime < 10) {
      nineAM.addClass("future")
    }
}

$("#date").text(now)
var saveNine = $('saveNine');
const saveNineField = () => {
  let nineAMText = nineAM.value;
  localStorage.setItem("nine", nineAMText);
  console.log(localStorage.getItem("nine"));
}
var past = $("#hour-9")
$(eightAm).addClass("current")
var nineAm=localStorage.getItem("#9am");
if(nineAm) {
$("#9am").val(nineAm);
}


console.log(moment().format("MM/DD/YYY"));
console.log(moment().format("HH:mm A"));
console.log(moment().format("h:mm a"))