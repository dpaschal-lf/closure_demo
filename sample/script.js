
var students = [
	{ name: 'sri', favoriteColor: 'blue', spiritAnimal: 'https://o.aolcdn.com/images/dims3/GLOB/crop/1080x540+0+227/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fd37c021d9fe56f3dea016d90630e213e%2F205297589%2F18581072_1372886469458704_6287495743800344576_n%25281%2529.jpg'},
	{ name: 'brandon', favoriteColor: 'blue', spiritAnimal: 'https://vetstreet.brightspotcdn.com/dims4/default/ed9c960/2147483647/crop/695x409%2B0%2B17/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fee%2F52%2F574ac9cf4c16a6e1c3a8743e5f23%2Fborder-collie-ap-1bwcwp.jpg'},
	{ name: 'michael e', favoriteColor: 'blue', spiritAnimal: 'https://images-na.ssl-images-amazon.com/images/I/51BooYEMBgL._UX385_.jpg'},
	{ name: 'julian', favoriteColor: 'predictable blue', spiritAnimal: 'https://natgeo.imgix.net/factsheets/thumbnails/Article-%20Sloths%20May%20Be%20Slow,%20But%20Theyre%20Not%20Stupid%20.jpg?auto=compress,format&w=1024&h=560&fit=crop'},
	{ name: 'erin', favoriteColor: 'red', spiritAnimal: 'https://www.savethekoala.com/sites/savethekoala.com/files/uploads/31.jpg'},
	{ name: 'kyle', favoriteColor: 'green', spiritAnimal: 'https://www.natgeokids.com/wp-content/uploads/2017/02/giraffe-facts-1.jpg'},
	{ name: 'cody', favoriteColor: 'blue', spiritAnimal: 'https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/polar20bear20istock.jpg?ve=1&tl=1?ve=1&tl=1'},
	{ name: 'oscar', favoriteColor: 'green', spiritAnimal: 'https://www.grindtv.com/wp-content/uploads/2016/03/Tiny-shark-rescue-1-1024x700.jpg'},


];

$(document).ready(initializeApp);

function initializeApp(){
	listAllStudents(students);
}
/*
		<div class="studentContainer">
			<div class="name">Test Student2</div>
		</div>
		*/
function listAllStudents(studentArray){
	var domElements = [];
	for(var i=0; i<studentArray.length; i++){
		var container = $("<div>",{
			'class': 'studentContainer',
		});
		container.click({student: studentArray[i] }, handleClick)
		// (function (){
		// 	debugger;
		// 	var student = studentArray[i];
		// 	container.click( function(){
		// 		debugger;
		// 		console.log(student);
		// 	} );
		// })()
		//addClickHandler(container, i);
		// container.click( function(){
		// 	console.log(i);
		// } );
		// var container = document.createElement('div');
		// container.classList.add('studentContainer');
		var name = $("<div>",{
			'class': 'name',
			text: studentArray[i].name
		});
		// var name = document.createElement('div');
		// name.classList.add('name');
		// name.textContent = studentArray[i].name
		container.append(name);
		// container.appendChild(name);
		domElements.push(container);
	}
	$("#listDisplay").empty().append(domElements);
}

function addClickHandler(domElement, index){
	var superIndex = index*10;
	domElement.click( function(){
		debugger;
		console.log(index, domElement, superIndex);
	} );
}


function handleClick( indexOfStudent ){
	console.dir(event.currentTarget);
	// var index = event.currentTarget.getAttribute('personIndex');
	// var index = $(event.currentTarget).attr('personIndex');
	// console.log(index);
	var personObject = event.currentTarget.studentInfo;

	var name = $("<div>",{
		class: 'name',
		text: personObject.name,
		css: {
			color: personObject.favoriteColor
		}
	});
	var img = $("<img>",{
		src: personObject.spiritAnimal
	})
	$("#infoDisplay").empty().append(name, img);
}




















