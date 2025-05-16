
class TodoApp {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.tasklist = document.getElementById('tasklist');
        this.addTaskButton = document.getElementById('addTaskButton');

        // Bind event listeners
        this.addTaskButton.addEventListener('click', this.addTask.bind(this));

        // Load existing tasks from localStorage
        this.loadTasksFromStorage();
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            this.tasklist.appendChild(li);
            this.taskInput.value = '';

            // Add event listeners to task
            li.addEventListener('click', this.completeTask.bind(this));

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', this.deleteTask.bind(this));
            li.appendChild(deleteBtn);
        }

        this.saveTasksToLocalStorage();
    }

    completeTask(event) {
        const task = event.target;
        task.classList.toggle('completed');
    }

    deleteTask(event) {
        const task = event.target.parentElement;
        this.tasklist.removeChild(task);
        this.saveTasksToLocalStorage(); // Ensure storage updates
    }

    saveTasksToLocalStorage() {
        const tasks = [...this.tasklist.children].map(li => li.textContent.replace("Delete", "").trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasksFromStorage() {
        this.tasklist.innerHTML = ''; // Clear previous tasks before loading
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(taskText => {
                const li = document.createElement('li');
                li.textContent = taskText;
                this.tasklist.appendChild(li);
                li.addEventListener('click', this.completeTask.bind(this));

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', this.deleteTask.bind(this));
                li.appendChild(deleteBtn);
            });
        }
    }
}

// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function() {
    window.myTodo = new TodoApp();
});































// class Tiihs{
//     constructor(){
// this.taskInput=document.getElementById('taskInput');
// this.tasklist=document.getElementById('tasklist');

// // this.loadTasksFromStorage();
//     }

// addTask(){
//     const taskText= this.taskInput.value.trim();
//     if (taskText !==''){
//         const li = document.createElement('li');
//         li.textContent =taskText;
//         this.tasklist.appendChild(li);
//         this.taskInput.value='';
//         //task completion   
//         li.addEventListener('click', this.completeTask.bind(this));

//         //handling task deletion
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent='Delete';
//         deleteBtn.addEventListener('click',deleteTask);
//         li.appendChild(deleteBtn);
//     }

//     saveTasksToLocalStorage();
// }

// //task completion
// completeTask(event){
//     const task = event.target;
//     task.classList.toggle('completed')
// }

// //Deleting tasks

// deleteTask(event){
//     const task=event.target.parentElement;
//     this.tasklist.removeChild(task);
// }

// saveTasksToLocalStorage(){
//     const tasks =[];
//     const taskItems = this.tasklist.getElementByTagName('li');


//     for (let i=0; i<tasklist.length; i++){
//         tasks.push(taskItems[i].textContent);
//     }

//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// loadTasksFromStoragee(){
//     const tasks =JSON.parse(localStorage.getItem('tasks'));
//     if (tasks){
//         tasks.forEach(taskText => {
//             const li =document.createElement('li');
//             li.textContent=taskText;
//             this.tasklist.appendChild(li);
//             li.addEventListener('click', completeTask.bind(this));

//             const deleteBtn=document.createElement('button');
//             deleteBtn.textContent ='Delete';
//             deleteBtn.addEventListener('click', deleteTask);
//             li.appendChild(deleteBtn);
            
//         });
//     }
// }
// }

// 




// const arr = [];
// class Todolist {

//     constructor() {
//         document.getElementById('submit')
//             .addEventListener("click", this.addTask)

//     }

//     addTask() {
//         const inputElement = document.getElementById('Mytasks');
//         const list = document.querySelector('li').innerHTML = inputElement.value;
//         // inputElement.value="";
//         arr.push(inputElement.value);
//     }

// }
// const todoList = new Todolist()



//Handling Task addition