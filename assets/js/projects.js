// Get the modal
var modal = document.getElementById("modal");

// Get the buttons that opens the modal
var btns = document.getElementsByClassName("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");

const jsonFileName = "/projects/projects.json";

var jsonObject = buildJSON(jsonFileName);

buildProjectButtons(jsonObject);


/*
<div class="col-md-6 col-lg-4">
	<div class="project-card-no-image">
		<h3>JMU CWC Website</h3>
		<h4>Full stack website for JMU Collegiate Wind Competition 2020.</h4><a id="jmu-cwc-2020" class="modal-button btn btn-outline-primary btn-sm" role="button" >See More</a>
		<div class="tags"><a>PHP</a></div>
	</div>
</div>
*/


function buildProjectButtons(jsonObject){
	
	var projectsDiv = document.getElementById("projects");
	
	projectsDiv.innerHTML = "";
	for(var i = 0; i < jsonObject.length; i++){
		console.log(jsonObject[i]);
		
		var tagsHTML = "";
		for(var t = 0; t < jsonObject[i].tags.length; t++){
			jsonObject[i].tags[t]
			tagsHTML += "<a>"+jsonObject[i].tags[t]+"</a>";
			if(t < jsonObject[i].tags.length - 1){
				tagsHTML += " "
			}
		}
		
		var innerHTML = "";
		
		innerHTML += '<div class="col-md-6 col-lg-4"><div class="project-card-no-image">';
		innerHTML += '<h3>' + jsonObject[i].name + '</h3>';
		innerHTML += '<h4>' + jsonObject[i].brief + '</h4><a id="' + jsonObject[i].id + '" class="modal-button btn btn-outline-primary btn-sm" role="button" >See More</a>';
		innerHTML += '<div class="tags">' + tagsHTML + '</div>';
		innerHTML += '</div></div>';
		
		projectsDiv.innerHTML += innerHTML;
	}
	
	
	// When the user clicks on the button, open the modal
	for(var i = 0; i < btns.length; i++){
		btns[i].onclick = function() {
			var jsonProject = getJSON(jsonObject, this.id);
			buildModal(jsonProject);
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
}


function buildModal(jsonProject){
	//Header
	var nameHeader = document.getElementById("modal-project-name");
	nameHeader.innerText = jsonProject.name;
	
	//Image
	var image = document.getElementById("modal-project-image");
	if (typeof jsonProject.image !== 'undefined'){
		image.setAttribute("style", "background-image:url('" + jsonProject.image +"');");
		image.style.display = "block";
	}
	else{
		image.style.display = "none";
	}
	
	//Description
	var descriptionBlock = document.getElementById("modal-project-desc");
	descriptionBlock.innerHTML = "";
	for(var i = 0; i < jsonProject.desc.length; i++){
		descriptionBlock.innerHTML += "<p>"+jsonProject.desc[i]+"</p>";
	}
	
	//Github Button Link
	var githubButton = document.getElementById("modal-project-link");
	githubButton.href = jsonProject.link;
	
	//Tags
	var tagBlock = document.getElementById("modal-project-tags");
	tagBlock.innerHTML = "";
	for(var i = 0; i < jsonProject.tags.length; i++){
		tagBlock.innerHTML += "<a>"+jsonProject.tags[i]+"</a>";
		if(i < jsonProject.tags.length - 1){
			tagBlock.innerHTML += "<br>"
		}
	}
	
	//Date
	var date = document.getElementById("modal-project-date");
	date.innerText = jsonProject.date;
	
	//Progress Bar
	var progressBar = document.getElementById("modal-project-progress");
	progressBar.setAttribute("aria-valuenow", jsonProject.progress);
	progressBar.setAttribute("style", "width: " + jsonProject.progress +"%;");
	progressBar.innerText = jsonProject.progress + "%";
	
	//Display Modal
	modal.style.display = "block";
}


function buildJSON(jsonFilePath){
	var request = new XMLHttpRequest();
	request.open("GET", jsonFilePath, false);
	request.send(null)
	
	var jsonObject = JSON.parse(request.responseText);
	
	return jsonObject;
}

function getJSON(jsonObject, projectID) {	
	// Find matching projectName
	for (var i = 0; i < jsonObject.length; i++){
	  if (jsonObject[i].id == projectID){
		  return(jsonObject[i]);
	  }
	}
}