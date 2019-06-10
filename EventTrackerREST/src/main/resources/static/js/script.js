window.addEventListener('load', function (e) {
	console.log('Loaded');
	init();
});
function init() {
	getAllJumps();
	document.addJump.submit.addEventListener('click', function (e) {
		e.preventDefault();
		addJump();

	})
	document.editJump.editSubmit.addEventListener('click', editSubmit);
}

function getAllJumps() {
	console.log("getting jumps");
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jumps', true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var jumps = JSON.parse(xhr.responseText);
			displayJumps(jumps);
			displayJumpTotals(jumps);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
		}
	}
	xhr.send(null);
}
function displayJumps(jumps) {
	var div = document.getElementById('jumps');
	var table = document.getElementById('table');
	if(table === null){
		table = document.createElement('table');
		table.id = 'table';
	}else{
		table.parentNode.removeChild(table);
		var table = document.createElement('table');
		table.id = 'table';
	}
	jumps.forEach(function (value) {
		var row = document.createElement('tr');
		row.value = value;
		var td = document.createElement('td');

		row.addEventListener('click', loadDetailView);

		td.value = value;
		td.textContent = value.location;
		row.appendChild(td);
		table.appendChild(row);
	});


	div.appendChild(table);


}
function loadDetailView(e) {
	var div = document.getElementById('detail');


	console.log(div);
	if (div.hasChildNodes()) {
		var edit = document.getElementById('edit');
		var del = document.getElementById('del');
		div.removeChild(edit);
		div.removeChild(del);
	}
	//Get all the td elements
	var td = document.getElementsByTagName('td');
	//Turn node list into array
	var tdArray = Array.from(td);
	//Turn all highlighted items to white
	tdArray.forEach(function (tabData) {
		tabData.style.backgroundColor = 'white';
	});
	var ul = document.getElementById('list');
	if (ul === null) {
		ul = document.createElement('ul');
		ul.id = 'list';

	} else {
		ul.parentNode.removeChild(ul);
		ul = document.createElement('ul');
		ul.id = 'list';
	}
	e.target.style.backgroundColor = 'lightblue';
	var arr = [e.target.value.location, e.target.value.date.substring(0, 10), e.target.value.altitude, e.target.value.delay, e.target.value.description];
	for (var i = 0; i < arr.length; i++) {
		
		var li = document.createElement('li');
		li.textContent = arr[i];
		ul.appendChild(li);
	}
	var edit = document.createElement('button');
	edit.innerHTML = 'Edit';
	edit.id = 'edit';
	edit.addEventListener('click', editJump);
	edit.value = e.target.value.id;//assign jump Id to edit button
	var del = document.createElement('button');
	del.innerHTML = 'Delete';
	del.id = 'del';
	del.value = e.target.value.id;//assign the jump Id to delete button
	del.addEventListener('click', deleteJump);

	div.appendChild(ul);
	div.appendChild(edit);
	div.appendChild(del);


}
function editJump(e) {
	console.log("editing");
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jumps/' + e.target.value, true);

	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var jump = JSON.parse(xhr.responseText);
			
			document.editJump.editSubmit.value = e.target.value;
			document.editJump.editDate.value = jump.date.substring(0,10);
			document.editJump.editLocation.value = jump.location;
			document.editJump.editType.value = jump.type;
			document.editJump.editAltitude.value = jump.altitude;
			document.editJump.editDelay.value = jump.delay;
			document.editJump.editDescription.value = jump.description;
			document.editJump.style.visibility = "visible";
				
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
		}
	};
	

	xhr.send(null);
	
}
function editSubmit(e){

	var xhr = new XMLHttpRequest();
	console.log("id should be " + e.target.value);
	
	xhr.open('PUT', 'api/jumps/' + e.target.value, true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var jump = JSON.parse(xhr.responseText);
			
				
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
		}
	};
	var jump = {
		date: document.editJump.editDate.value,
		location: document.editJump.editLocation.value,
		type: document.editJump.editType.value,
		altitude: document.editJump.editAltitude.value,
		delay: document.editJump.editDelay.value,
		description: document.editJump.editDescription.value
	};
	var jumpJSON = JSON.stringify(jump); // Convert JS object to JSON string
	xhr.send(jumpJSON);
	document.editJump.reset();


}

function deleteJump(e){
	console.log("deleting " + e.target.value );

	var xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/jumps/' + e.target.value, true);

	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var jump = JSON.parse(xhr.responseText);
				console.log("deleting");
				
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
		}
	}
	xhr.send();
	location.reload();
}

function addJump() {
	var xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/jumps', true);

	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status < 400) {
			

		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR: ' + xhr.status + ': ' + xhr.responseText);
		}
	}
	var jump = {
		date: document.addJump.date.value,
		location: document.addJump.location.value,
		type: document.addJump.type.value,
		altitude: document.addJump.altitude.value,
		delay: document.addJump.delay.value,
		description: document.addJump.description.value
	};
	var jumpJSON = JSON.stringify(jump); // Convert JS object to JSON string
	xhr.send(jumpJSON);
	document.addJump.reset();
	location.reload();

}

function displayJumpTotals(jumps){
	var div = document.getElementById('totals');
	var table = document.createElement('table');
	var totalJumps = 0;
	var totalTime = 0;
	var totalAlti = 0;
	jumps.forEach(function(jump){
	
		totalJumps+=1;
		totalAlti += jump.altitude;
		totalTime += jump.delay;
	
	});
	var td = document.createElement('tr');
	var td2 = document.createElement('tr');
	var td3 = document.createElement('tr');
	td.textContent= totalJumps + ' Jumps';
	td2.textContent= totalAlti + ' Feet Fallen';
	td3.textContent= totalTime + ' Seconds of Sky Time';

	table.appendChild(td);
	table.appendChild(td2);
	table.appendChild(td3);
	div.appendChild(table);
	console.log("Total time: " + totalTime);
	console.log("Total altitude: " + totalAlti);
	console.log("Total Jumps: " + totalJumps);
	
}
