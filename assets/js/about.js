const jsonFileName = "/about/about.json";

var jsonObject = buildJSON(jsonFileName);

console.log(jsonObject.contact);

buildWork(jsonObject.work);
buildSchool(jsonObject.school);
buildSkills(jsonObject.skills);
buildContact(jsonObject.contact);
buildHobbies(jsonObject.hobbies);

                    
function buildJSON(jsonFilePath){
	var request = new XMLHttpRequest();
	request.open("GET", jsonFilePath, false);
	request.send(null)
	
	var jsonObject = JSON.parse(request.responseText);
	
	return jsonObject;
}

function buildWork(jsonObject){
	
	var workDiv = document.getElementById("about-work");
	
	for(var i = 0; i < jsonObject.length; i++){		
		var innerHTML = "";
		
		innerHTML += '<div class="item">';
		innerHTML += '<div class="row">';
		innerHTML += '<div class="col-md-6">';
		innerHTML += '<h3>' + jsonObject[i].title + '</h3>';
		innerHTML += '<h4 class="organization">' + jsonObject[i].company + '</h4>';
		innerHTML += '</div>';
		innerHTML += '<div class="col-md-6"><span class="period">' + jsonObject[i].start + '-' + jsonObject[i].end + '</span></div>';
		innerHTML += '</div>';
		innerHTML += '<p class="text-muted">' + jsonObject[i].desc + '</p>';
		innerHTML += '</div>';

		workDiv.innerHTML += innerHTML;
	}
}

function buildSchool(jsonObject){
	
	var schoolDiv = document.getElementById("about-school");
	
	for(var i = 0; i < jsonObject.length; i++){		
		var innerHTML = "";
		
		innerHTML += '<div class="item">';
		innerHTML += '<div class="row">';
		innerHTML += '<div class="col-md-6">';
		innerHTML += '<h3>' + jsonObject[i].title + '</h3>';
		innerHTML += '<h4 class="organization">' + jsonObject[i].school + '</h4>';
		innerHTML += '</div>';
		innerHTML += '<div class="col-md-6"><span class="period">' + jsonObject[i].start + '-' + jsonObject[i].end + '</span></div>';
		innerHTML += '</div>';
		innerHTML += '<p class="text-muted">' + jsonObject[i].desc + '</p>';
		innerHTML += '</div>';

		schoolDiv.innerHTML += innerHTML;
	}
}

function buildSkills(jsonObject){
	var skillsDiv = document.getElementById("about-skills");
	
	var innerHTML = "";
	for(var i = 0; i < jsonObject.length; i++){		
		innerHTML += '<h3>' + jsonObject[i].name + '</h3>';
		innerHTML += '<div class="progress">';
		innerHTML += '<div class="progress-bar" aria-valuenow="' + jsonObject[i].score + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + jsonObject[i].score + '%;"><span class="sr-only">' + jsonObject[i].score + '%</span></div>';
		innerHTML += '</div>';
	}
	
	skillsDiv.innerHTML += innerHTML;
}

function buildContact(jsonObject){
	var nameDiv = document.getElementById("about-name");
	nameDiv.innerHTML = '<span>' + jsonObject.name + '</span>';
	
	var dateDiv = document.getElementById("about-date");
	dateDiv.innerHTML = '<span>' + jsonObject.date + '</span>';
	
	var locationDiv = document.getElementById("about-location");
	locationDiv.innerHTML = '<span>' + jsonObject.location + '</span>';
	
	var emailDiv = document.getElementById("about-email");
	emailDiv.innerHTML = '<span>' + jsonObject.email +'</span>';
}

function buildHobbies(jsonObject){
	var hobbiesDiv = document.getElementById("about-hobbies");
	
	var innerHTML = "";
	for(var i = 0; i < jsonObject.length; i++){		
		innerHTML += '<p class="text-center text-muted">' + jsonObject[i] + '</p>'
	}
	
	hobbiesDiv.innerHTML += innerHTML;
}
