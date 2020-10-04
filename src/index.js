document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const firstButtonPage = document.querySelector("buttonclicked")
  // const newTaskForm = document.getElementById("create-task-form");


  // firstButtonPage.addEventListener('click' , () => {
  //   alert("I was clicked")
  // })



// your code here
const createTaskForm = document.getElementById("create-task-form");
createTaskForm.addEventListener("submit", createNewTask);
console.log("hello")
});

const createNewTask = event => {
   //stop form from trying to submit
event.preventDefault();

const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.createElement("li");
newTask.innerText = newTaskDescription.value;

appendNewTask(newTask);
event.target.reset();
};

const appendNewTask = task => {
document.getElementById("tasks").appendChild(task);

  
  };
