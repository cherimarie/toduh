function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

if(supports_html5_storage()){
  //window.localStorage is available!
  var foo = localStorage["bar"];
  localStorage["bar"] = "baz";
} 
console.log(foo);

//def thing object
var Thing = function(description){
  this.description = description;
  this.dayadded = dateAdded();
}

function dateAdded(){
  var currentdate = new Date(); 
  var dayMonthYear = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate() + "/" 
                + currentdate.getFullYear();
  return dayMonthYear;
}

//initialize array of things
var allThings = [];

//function to add thing, triggered by clicking #addThing button  
function addThing(){
  var newDesc = document.getElementById("newThing").value;

  if(newDesc == null || newDesc==""){
    alert("Just make a thing, dude.");

  }else{
    var newThing = new Thing(newDesc);
    allThings.push(newThing);

    //print the newThing to bottom of list of things
    var table = document.getElementById("listThings");
    var row = table.insertRow(-1);
    row.id = "thing" + allThings.indexOf(newThing);
    var cell = row.insertCell(0);
    cell.innerHTML = newThing.description;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = newThing.dayadded;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "<i class='fa fa-minus-square'></i>" 
    cell3.onclick = function(){
      deleteThing(newThing)
    };
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "<i class='fa fa-pencil-square-o'></i>";
    cell4.onclick = function(){
      edit(newThing)
    };
  }
}

function edit(thing){
  //create edit box at bottom of container, with save and cancel buttons
  var editBox = document.createElement("div");
  var editHeader = document.createElement("h5");
  var editText = document.createElement("input");
  var saveButton = document.createElement("button");
  var cancelButton = document.createElement("button");

  editBox.id = "editBox";
  editHeader.innerHTML = "Edit your thing:";
  //prefill text bos with current value of description
  editText.value = thing.description;
  saveButton.innerHTML = "Save";
  cancelButton.innerHTML = "Cancel";

  saveButton.onclick = function(){
    saveEdit(thing, editText.value);
  };
  cancelButton.onclick = function(){
    clearEditBox();
  };

  editBox.appendChild(editHeader);
  editBox.appendChild(editText);
  editBox.appendChild(saveButton);
  editBox.appendChild(cancelButton);

  document.querySelector(".container").appendChild(editBox);

}

function saveEdit(thing, editedDesc){
  //edit the object
  thing.description = editedDesc;

  //remove the edit box from page
  clearEditBox();

  //reprint the new description of item
  var i = allThings.indexOf(thing) + 1;
  var td = document.getElementById("listThings").rows[i].cells[0];
  td.innerHTML = thing.description;

}

function clearEditBox(){
  var editBox = document.getElementById("editBox");
  var container = document.querySelector(".container");
  container.removeChild(editBox);
}

//delete function
function deleteThing(thing){
    alert("Are you sure you no longer care for this thing?");
    var index = allThings.indexOf(thing);
    document.getElementById("listThings").deleteRow(index + 1);
    allThings.remove(index);
}

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};