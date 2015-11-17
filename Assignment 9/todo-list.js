var taskText;
var taskArray;

function addTheTask(){

	var text = taskText.value;
	if (text == "") return;

	var element = document.createElement("label");
	element.innerHTML = '<input type="checkbox" name="allTasks[]" value="' + text + '"> ' + text;
    taskArray.appendChild(element);
    taskArray.appendChild(document.createElement("br"));
    // Clear new task text field
    taskText.value = "";
    window.localStorage.taskArray = taskArray.innerHTML;
}

function clearCompleted(){
	console.log("heia");
	var allTasks = document.getElementsByName("allTasks[]");
	var length = allTasks.length;
	var teller;

	for (var i = 1; i <= length; i++) {
		teller = length - i;
		console.log(teller);
		if(allTasks[teller].checked){
			console.log(222);
			taskArray.removeChild(allTasks[teller].parentElement.nextSibling);
			taskArray.removeChild(allTasks[teller].parentElement);
		}
	};
	window.localStorage.taskArray = taskArray.innerHTML;
	console.log(1);
}

function clearAll(){
	var r = confirm("Sikker på at du vil slette \nalle gjøremål?");
	if (r == true) {
		taskArray.innerHTML = "";
    	 window.localStorage.taskArray = taskArray.innerHTML;
	} else {
    	return;
	}
}


window.onload = function(){

	taskText = document.getElementById('taskText');
	taskArray = document.getElementById('taskArray')

	addTask.addEventListener("click", addTheTask);

	var clearButton = document.getElementById('clear');
	clearButton.addEventListener("click", clearCompleted);

	document.getElementById('clearAll').addEventListener("click", clearAll);

	var storedTaskList = window.localStorage.taskArray;

    if (storedTaskList != null) {
        taskArray.innerHTML = storedTaskList;
    } else {
        window.localStorage.taskArray = taskArray.innerHTML;
    }
}