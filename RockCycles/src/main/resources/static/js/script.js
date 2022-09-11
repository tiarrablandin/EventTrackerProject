window.addEventListener('load', function(e){
	console.log('script.js loaded');
	init();
})

function displayError(msg){
  let dataDiv = document.getElementById('rockData');
  dataDiv.textContent = '';
  dataDiv.textContent = msg;
}

function init(){
	
    loadAll();
    
	document.rockForm.search.addEventListener('click', function(e) {
	    e.preventDefault();
	    console.log('click')
	    let keyword = document.rockForm.keyword.value;
	    
	    if (keyword != null) {
		console.log("Rock Name: " + keyword);
	      getRock(keyword);
	    }
	    
    });
    
    document.addRockForm.addRock.addEventListener('click', function(e){
	e.preventDefault();
	console.log("Adding rock");
	let rock = {
		name: addRockForm.name.value,
		element: addRockForm.element.value,
		planet: addRockForm.planet.value,
		properties: addRockForm.properties.value,
		tips: addRockForm.tips.value,
	};
	console.log()
	addNewRock(rock);
})
    
    document.updateRockForm.updateRock.addEventListener('click', function(e){
	e.preventDefault();
    console.log(e);
    let rock = {
		id: document.updateRockForm.id.value,
		name: document.updateRockForm.name.value,
		element: document.updateRockForm.element.value,
		planet: document.updateRockForm.planet.value,
		properties: document.updateRockForm.properties.value,
		tips: document.updateRockForm.tips.value,
	}
    console.log(rock)
	updateRock(rock);
});
    
    document.deleteById.deleteRock.addEventListener('click', (e) => {
        e.preventDefault();
        let id = document.deleteById.id.value;
        deleteById(id);
    });
    
}

function loadAll() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/rocks");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                console.log('Loaded')
                displayRocks(JSON.parse(xhr.responseText));
            }
            else {
                console.error('Error loading: ' + xhr.status);
            }
        }
    };
    xhr.send();
}

function getRock(keyword) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/rocks/' + keyword);
  xhr.onreadystatechange = function(){
	  if (xhr.readyState === 4) {
		if(xhr.status === 200){
			console.log("rock found");
			let rockData = JSON.parse(xhr.responseText);
			displaySearchedRocks(rockData);
		} else{
			console.log("rock not found");
			displayError('Rock ' + keyword + ' not found');
		  }
	    }
	  }
	  xhr.send();
}

function getRockById(rockId) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/rocks/' + rockId);
  xhr.onreadystatechange = function(){
	  if (xhr.readyState === 4) {
		if(xhr.status === 200){
			console.log("rock found");
			//console.log(xhr.responseText)
			let rock = JSON.parse(xhr.responseText);
			displayFilm(rock);
			getActors(rock.id);
		} else{
			console.log("rock not found");
			displayError('Rock ' + rockId + ' not found');
		}
	}
}
	xhr.send();
}

function displayRocks(rockList) {
    let dataDiv = document.getElementById("rockList");
    dataDiv.textContent = 'Rocks';
    let ul = document.createElement('ul');
    dataDiv.appendChild(ul);
    for (let rock of rockList) {
        let li = document.createElement('li');
        li.textContent = rock.name;
        ul.appendChild(li);
    }
}

function displaySearchedRocks(rockList) {
    let dataDiv = document.getElementById("rockList");
    dataDiv.textContent = 'Rocks';
    let ul = document.createElement('ul');
    dataDiv.appendChild(ul);
    for (let rock of rockList) {
        let li = document.createElement('li');
        li.textContent = rock.id;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.name;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.element;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.planet;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.properties;
        ul.appendChild(li);
    }
}

function displaySearchedRock(rock) {
    let dataDiv = document.getElementById("rockList");
    dataDiv.textContent = 'Rocks';
    let ul = document.createElement('ul');
    dataDiv.appendChild(ul);
        let li = document.createElement('li');
        li.textContent = rock.name;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.element;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.planet;
        ul.appendChild(li);
        li = document.createElement('li');
        li.textContent = rock.properties;
        ul.appendChild(li);
}


function addNewRock(rock){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', `api/rocks`);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200 || xhr.status === 201){
				console.log("Rock created");
				displaySearchedRock(JSON.parse(xhr.responseText));
			}
			else if(xhr.status === 400){
				displayError("Invalid data");
			}
			else {
				displayError("Error creating rock: " + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let rockJson = JSON.stringify(rock);
	xhr.send(rockJson);
}

function updateRock(rock) {
/*    upRock.preventDefault();
    console.log(upRock);
    let rock = {
		name: document.updateRockForm.name.value,
		element: document.updateRockForm.element.value,
		planet: document.updateRockForm.planet.value,
		properties: document.updateRockForm.properties.value,
		tips: document.updateRockForm.tips.value,
	} */
    console.log(rock)
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'api/rocks/' + document.updateRockForm.id.value, true);
    
    xhr.setRequestHeader("Content-type", "application/json");
    let rockJson;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
		console.log(xhr.status);
            if (xhr.status == 200 || xhr.status == 201) {
			//	rock = JSON.parse(xhr.responseText)
                console.log(rock);
				rockJson = JSON.parse(xhr.responseText)
              //  displaySearchedRock(rock);
            }
            else {
                console.error("PUT request failed.");
                console.error(xhr.status + ": " + xhr.responseText);
            }
        }
    };
    rockJson = JSON.stringify(rock);
    console.log("rock: " + rock);
	xhr.send(rockJson);
    console.log("rockJson: " + rockJson);
}

function deleteById(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'api/rocks/' + id)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let dataDiv = document.getElementById('id');
                dataDiv.textContent = 'Rock has been deleted';
            }else {
                console.log("Rock not found");
                let dataDiv = document.getElementById('rockData');
                dataDiv.textContent = '';
                let notFoundDiv = document.createElement('div');
                dataDiv.appendChild(notFoundDiv);
            }
        };
    }
    xhr.send();
}
