//function to display list 
function printThings(){
  var table = document.getElementById("listThings");
  var row = table.insertRow(1);
  var cell = row.insertCell(0);
  cell.innerHTML = "Spaghetti";
  var cell2 = row.insertCell(1);
  cell2.innerHTML = "01/17/13";
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)

  
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

//function to add thing from form to list
var allThings = [];
allThings[0] = new Thing("Spaghetti sauce stains");

//trigger add thing to list when user clicks 'add thing' button



//when page loads, display list 
document.addEventListener( "DOMContentLoaded", function(e){
  printThings(); 
});