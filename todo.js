/*
  V4 Requirements
    
		  todoList.changeTodo should change the todoText property
		  todoList.toggleCompleted should changethe completed property

		  completed:
		     todoList.addTodo should add objects	  
*/
var todoList = {
	todos: [],

	displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodo: function(todoText) {
  	this.todos.push({
      todoText: todoText,
      completed: false
  	}),
  	this.displayTodos();
  },
  changeTodo: function(position, newValue) {
	this.todos[position] = newValue;
	this.displayTodos();
  },
  deleteTodo: function(position) {
  	this. todos.splice(position, 1);
  	this.displayTodos();
  }

};