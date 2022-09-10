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

