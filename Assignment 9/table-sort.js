var tableBody;
var array;


function getTable(){
	table = document.getElementById('the-table-body')
	tableLength = table.rows.length;
	array = [length];

	for (var i = 0; i < tableLength; i++) {
		cells = table.rows.item(i).cells;
		cellsLength = cells.length;
		var cellArray = [cellsLength];

		for (var j = 0; j < cellsLength; j++) {
			cellArray[j] = cells.item(j).innerHTML;
		};
		array[i] = cellArray;

	};
}


function updateTable(){
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array[0].length; j++){
			table.rows[i].cells[j].innerHTML = array[i][j];
		}
	}
}


function firstSort(){
	array = array.sort(function(a,b){
		return a[0] > b[0];
	});
	updateTable();
}


function secondSort(){
	array = array.sort(function(a,b){
		return a[1] > b[1];
	});
	updateTable();
}


function thirdSort(){
	array = array.sort(function(a,b){
		return a[2] > b[2];
	});
	updateTable();
}


window.onload = function(){

	getTable();

	var sButton1 = document.getElementById('sort-button-1');
	sButton1.addEventListener("click", firstSort);

	var sButton2 = document.getElementById('sort-button-2');
	sButton2.addEventListener("click", secondSort);

	var sButton3 = document.getElementById('sort-button-3');
	sButton3.addEventListener("click", thirdSort);
}