/*
  V5 Requirements
    .displayTodos should show .todoText
    .displayTodos should tell you if .todos is empty
    .displayTodos should show .completed
    
    completed:
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
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}

};
