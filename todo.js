/*
  V2 Requirements
    completed:
		  It should have a function to display todos
		  It should have a function to add todos
		
		required:  
		  It should have a function to change todos
		  It should have a function do delete todos
*/
var todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(str) {
	todos.push(str);
	displayTodos();
}