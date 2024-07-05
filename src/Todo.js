// todo.js

class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    addChecklistItem(item) {
        this.checklist.push(item);
    }

    removeChecklistItem(index) {
        this.checklist.splice(index, 1);
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }
}

// Export the classes for use in other modules
export { Todo, Project };
