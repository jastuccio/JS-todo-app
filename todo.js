/*
  V3 Requirements
    
		  It should store the todos array on an object
		  It should have a displayTodos method
		  It should have an addTodo method
		  It should have a deleteTodo method

		  completed:
		  
*/
var todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log('My todos:', todos);
}

function addTodo(str) {
	todos.push(str);
	displayTodos();
}

function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}