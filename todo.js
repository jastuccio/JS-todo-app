/*
  V3 Requirements
    
		  It should have a deleteTodo method

		  completed:
		    It should store the todos array on an object
			  It should have a displayTodos method
			  It should have an addTodo method
		  
*/
var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],

	displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodo: function(todo) {
  	this.todos.push(todo);
  	this.displayTodos();
  },
  changeTodo: function(position, newValue) {
	this.todos[position] = newValue;
	this.displayTodos();
}
};

// function changeTodo(position, newValue) {
// 	todoList[position] = newValue;
// 	displaytodoList();
// }

// function deleteTodo(position) {
// 	todoList.splice(position, 1);
// 	displaytodoList();
// }