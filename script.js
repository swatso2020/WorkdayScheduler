
 var date = moment().format('LL');//create date and format it 
 $("#date").text(date)//append the date to the welInfro
var newDay = moment().hour(0);

var scheduledHours = [];
var availableHours = {};
var now = moment()


console.log(availableHours)

for (var hour = 9; hour < 18; hour++) {
  scheduledHours.push(moment({hour}).format('h  a'));
  $('.container').append(`<div class='row time-block' data-time='${hour}'>
       <!--hour column-->
           <div class='col-sm col-md-2 hour'>
             <p>${moment({hour}).format('h  a')}</p>
           </div>
        <!--scheduling column-->
           <div class='col-sm col-md-10 d-flex description'>
              <div class='input-group'>
                <textarea class="form-control text-area"></textarea>
                <div class='input-group-append'>
                  <button class='save-button d-flex justify-center align-center'>
                    <i class='far fa-save fa-2x save-icon'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`);
}

//Checking time to determine present, past, or future
for(var i=9;i<17;i++) {
    //Get the current hour
    var amPm="am";
    
    if(i>=12) {
    amPm="pm"; }
    var hour=i;
    console.log(hour);

    if(i>12) {
       
    hour-=12;
    console.log(hour)
    }
    var targetId="#"+hour+amPm;
   
    var className="future";
    
   
   
    // console.log(moment().format("HH:mm A"));
    // console.log(moment().format("h:mm a"));
    //If currentTime > i => class future
   // else if currentTime < i class past
    // // else class current
    // $(targetId).addClass(className);
    }
    



//if (currentTime >=0 && currentTime < 9){
  localStorage.clear();
//}

//Check for local storage to set value to the object and clearing if currentTime is between 12am and 9am
if (localStorage.getItem('availableHours')) {
  availableHours = JSON.parse(localStorage.getItem('availableHours'));
} else {
  availableHours = {
    '9': {
      time: '9',
      value: ''
    },
    '10': {
      time: '10',
      value: ''
    },
    '11': {
      time: '11',
      value: ''
    },
    '12': {
      time: '12',
      value: ''
    },
    '13': {
      time: '13',
      value: ''
    },
    '14': {
      time: '14',
      value: ''
    },
    '15': {
      time: '15',
      value: ''
    },
    '16': {
      time: '16',
      value: ''
    },
    '17': {
      time: '17',
      value: ''
    }
  };
}

//set value of availableHours to equal the user input for each row
$('.time-block').each(function() {
  $(this).find('.text-area').val(availableHours[$(this).attr('data-time')].value);
});

//save value to local storage on click
$('.save-button').on('click', function(event){
  event.preventDefault();

  //set availableHours time attribute
  var timeValue = $(this).closest('.time-block').attr('data-time');

  //set availableHours value attribute
    var textValue = $(this).closest('.time-block').find('.text-area').val();
    availableHours[timeValue].value = textValue;

  //save user input in each object to local storage
    localStorage.setItem('availableHours', JSON.stringify(availableHours));
});