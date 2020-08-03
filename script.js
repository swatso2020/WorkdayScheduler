var aboutCont = $("<div>")// create div for container for about about info
$("body").append(aboutCont)//append the aboutCount variable to the body tag
$(aboutCont).addClass('about')//add the about css class to the aboutCont variable
var wel=$("<h1>")//create variable to hold h1 tag
$(wel).text("Work Day Scheduler")//replace text in wel variable with the Title of the App "Work Day Scheduler"
$(aboutCont).append(wel)//select the aboutCont variable and append the wel variable
var welInfo=$("<h5>") //create the heading tag
$(welInfo).text("A simple Calendar app for scheduling your work day")//target the heading tag and change the text
$(wel).append(welInfo)//append the variable with the heading and the h5 tag and append it wel
var date = moment().format('LL');//create date and format it 
 $(aboutCont).append(date)//append the date to the welInfro

 var scheudleCont = $("<div>").text("schedule container")
scheudleCont.addClass("scheduleContainer")
$("body").append(scheudleCont)

var table = $("<table>")
table.addClass("table")
$("scheudleCont").append(table)

var row = $("<tr>")
row.addClass("table")
$(table).append(row).text("row tag")
var row2 = $("<tr>")
$(table).append(row2).text("row 2 tag")


 var timeVariables = [8,9,10,11,12,1,2,3,4,5,6,7,8];//created an array to hold the hours of the day
 createTableStructure();
 
 
 var row = $("<row>");
 var cell = $("<td>");

 function createTableStructure(){
    for(i=0; i<timeVariables.length; i++){
        var row = $("<row>");
       // $("row").text("hello")
        //row =$(listItem).text(timeVariables[i])
       // $(table).append(row)
       
    }
   
}

//console.log(table)

//loop to run through time block array and print its contents
 for(i=0;i<timeVariables.length;i++){
    var listItem=$("<div>")//creates li tag for the ul tag
    var row = $("<row>");
    row =$(listItem).text(timeVariables[i])//changes the content of the li tag and replaces it with the value from the array
   
    $(listItem).addClass("past")
    listItem.attr("time", timeVariables[i]);
   // $(row).append(table)//creates ul tag and appends to container
    console.log(listItem)
}
console.log(row)
 
            $("li").on("click",function(){ 
                var timeId=$(this).attr("time");
                var userTask=$(timeId).val();
                localStorage.setItem(timeId,userTask);
            });
            var nineAm=localStorage.getItem("#9am");
            if(nineAm) {
                $("#9am").val(nineAm);
            }
            for(var i=9;i<17;i++) {
                // Get the current hour
                var amPm="am";
                if(i>=12) {
                    amPm="pm";
                }
                var hour=i;
                if(i>12) {
                    hour-=12;
                }
                var targetId="#"+hour+amPm;
                var className="future";
                // If currentTime > i => class future
                // else if currentTime < i class past
                // else class current
                $(targetId).addClass(className);
            }
            /// Moment JS examples
            console.log(moment().format("MM/DD/YYY"));
            console.log(moment().format("HH:mm A"));
            console.log(moment().format("h:mm a"));
 