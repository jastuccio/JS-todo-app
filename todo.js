/*
  V7 Requirements
    There should be a "Display todos" button and a "Toggle all" button in the app.
    Clicking "Display todos" should run todoList.displayTodos.
    Clicking "Toggle all" should run todoList.toggleAll.
*/
var todoList = {
	todos: [],

	displayTodos: function() {
		if (this.todos.length == 0) {
	    console.log('Your todo list is empty!');
    } else {
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
			  console.log('(x) ', this.todos[i].todoText);
			  } else {
			 	  console.log('( ) ', this.todos[i].todoText);
			  }
			}
		}
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
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		if (completedTodos === totalTodos){						// Case 1: if all todos are true (completed) make all todos false
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {																			// Case 2: Otherwise make everything true
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();
	}

};
