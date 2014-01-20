//def thing object
var Thing = function(description){
  this.description = description;
  this.timeadded = dateAdded();
}

function dateAdded(){
  var currentdate = new Date(); 
  var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate() + "/" 
                + currentdate.getFullYear();
  return datetime;
}

//initialize array of all things, add first entry
var allThings = [];

//function to add thing from form to list and reprint list, triggered by clicking #addThing button  
function addThing(){
  var newDesc = document.getElementById("newThing").value;

  if(newDesc == null || newDesc==""){
    alert("Just make a thing, dude.");

  }else{
    var newThing = new Thing(newDesc);
    allThings.push(newThing);

    printThings(allThings);
    /* the following worked like a charm, but i'm trying to 
    refactor so there isn't 20 lines of duplicated code. so now,
     the printThings function does all the printing, which works 
     except for the delete function. 

    //print the newThing to list of things
    var table = document.getElementById("listThings");
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML = newThing.description;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = newThing.timeadded;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "<i class='fa fa-minus-square'></i>" 
    cell3.onclick = function(){
      deleteRow(newThing)
      };
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<i class='fa fa-pencil-square-o'></i>" 
 */ }
}

//function to reprint list 
function printThings(array){
  var table = document.getElementById("listThings");

  arrayLength = allThings.length;
  console.log(arrayLength);

  //delete all existing rows, other than 0, if arrayLength >1
  if(arrayLength > 1){
    for(var i = 1; i < arrayLength; i++){
      table.deleteRow(-1);
    }
  }
  
  //create the rows for the table
  for(var i = 0; i < arrayLength; i++){
    console.log(i + " " + allThings[i].description);
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = allThings[i].description;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = allThings[i].timeadded;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = '<i class="fa fa-minus-square"></i>' 
    cell3.id = "del" + i;
    assignDel(i);

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<i class='fa fa-pencil-square-o'></i>"; 
  }
}

function assignDel(i){
  document.getElementById("del" + i).onclick = function(){
    deleteRow(i);
  };
}

function deleteRow(index){
    console.log(index);
    //alert("Are you sure you no longer care for this thing?");
    document.getElementById("listThings").deleteRow(index + 1);
    allThings.remove(index);
    printThings(allThings);
  }

//when page loads, display initial list 
document.addEventListener( "DOMContentLoaded", function(e){
  printThings(allThings);
});

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
