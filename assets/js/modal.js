// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
for(var i = 0; i < btns.length; i++){
	btns[i].onclick = function() {
		var jsonObject = getJSON(this.id);
		buildModal(jsonObject);
	}
}

function buildModal(jsonObject){
	//Header
	var nameHeader = document.getElementById("modal-project-name");
	nameHeader.innerText = jsonObject.name;
	
	//Image
	var image = document.getElementById("modal-project-image");
	if (typeof jsonObject.image !== 'undefined'){
		image.setAttribute("style", "background-image:url('" + jsonObject.image +"');");
		image.style.display = "block";
	}
	else{
		image.style.display = "none";
	}
	
	//Description
	var descriptionBlock = document.getElementById("modal-project-desc");
	descriptionBlock.innerHTML = "";
	for(var i = 0; i < jsonObject.desc.length; i++){
		descriptionBlock.innerHTML += "<p>"+jsonObject.desc[i]+"</p>";
	}
	
	//Github Button Link
	var githubButton = document.getElementById("modal-project-link");
	githubButton.href = jsonObject.link;
	
	//Tags
	var tagBlock = document.getElementById("modal-project-tags");
	tagBlock.innerHTML = "";
	for(var i = 0; i < jsonObject.tags.length; i++){
		tagBlock.innerHTML += "<a>"+jsonObject.tags[i]+"</a>";
		if(i == jsonObject.tags.length - 1){
			tagBlock.innerHTML += "<br>"
		}
	}
	
	//Date
	var date = document.getElementById("modal-project-date");
	date.innerText = jsonObject.date;
	
	//Progress Bar
	var progressBar = document.getElementById("modal-project-progress");
	progressBar.setAttribute("aria-valuenow", jsonObject.progress);
	progressBar.setAttribute("style", "width: " + jsonObject.progress +"%;");
	progressBar.innerText = jsonObject.progress + "%";
	
	//Display Modal
	modal.style.display = "block";
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


function getJSON(projectID) {
	var request = new XMLHttpRequest();
	request.open("GET", "/projects/projects.json", false);
	request.send(null)
	
	var jsonObject = JSON.parse(request.responseText);
	
	// Find matching projectName
	for (var i = 0; i < jsonObject.length; i++){
	  if (jsonObject[i].id == projectID){
		  return(jsonObject[i]);
	  }
	}
}