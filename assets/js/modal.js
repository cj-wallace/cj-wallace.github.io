// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
for(var i = 0; i < btns.length; i++){
	console.log(btns[i].id);
	btns[i].onclick = function() {
		var jsonObject = getJSON(this.id);
		console.log(jsonObject);
		modal.style.display = "block";
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


function getJSON(projectName) {
	var request = new XMLHttpRequest();
	request.open("GET", "/projects/projects.json", false);
	request.send(null)
	
	var jsonObject = JSON.parse(request.responseText);
	
	// Find matching projectName
	for (var i = 0; i < jsonObject.length; i++){
	  if (jsonObject[i].name == projectName){
		  return(jsonObject[i]);
	  }
	}
}