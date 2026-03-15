function updateClock(){
	var now=new Date();
	Document.getElementById("clock").innerHTML=now.toLocaletimeString();
}
setInterval(updateClock,1000);
function addTask(){
	var input=Document.getElementById("taskInput");
	var task=input.value;
	if(task==="")return;
	var li=Document.createElement("li");
	li.innerHTML=task;
	Document.getElementById("taskList").appendChild(li);
	input.value="";
)
function toggleTheme(){
	Document.body.classList.toggle("dark");
}