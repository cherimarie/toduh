
//function to display list 
function printThings(array){
  var table = document.getElementById("listThings");

  arrayLength = allThings.length;

  for(var i = 0; i < arrayLength; i++){
    var row = table.insertRow(i + 1);
    var cell = row.insertCell(0);
    cell.innerHTML = array[i].description;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = array[i].timeadded;
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  }
  
}

//def thing object
var Thing = function(description){
  this.description = description;
  this.timeadded = "01/17/13";
  this.delete = function(){
    alert("Are you sure you no longer care for this thing?");
    //self destruct
  }
}

//initialize array of all things, add first entry
var allThings = [];
allThings[0] = new Thing("Spatulas");

//function to add thing from form to list and reprint list, triggered by submitting form  
function addThing(){
  var newDesc = document.getElementById("newThing").value;

  if(newDesc == null || newDesc==""){
    alert("Just make a thing, dude.");

  }else{
    var newThing = new Thing(newDesc);
    allThings.push(newThing);

    //print the newThing to list of things
    var table = document.getElementById("listThings");
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML = newThing.description;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = newThing.timeadded;
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  }
}


//when page loads, display initial list 
document.addEventListener( "DOMContentLoaded", function(e){
  printThings(allThings);
});