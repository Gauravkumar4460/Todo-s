

import { Todo, Project } from './Todo.js';
import { ProjectManager } from './ProjectManager.js';

import './style.css';

const projectManager = new ProjectManager();

const UI = (() => {
    const projectList = document.getElementById('project-list');
    const todoList = document.getElementById('todo-list');
    const todoForm = document.getElementById('todo-form');

    const renderProjects = () => {
        projectList.innerHTML = '';
        projectManager.projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.style.backgroundColor = 'pink';
            projectElement.style.display = 'flex';
            projectElement.style.alignItems = 'center';
            projectElement.style.padding = '10px';
            projectElement.style.margin = '5px 0';

            
            const addProjectOption = document.createElement('div');
            addProjectOption.style.width = '20px';
            addProjectOption.style.height = '20px';
            addProjectOption.style.backgroundColor = 'red';
            addProjectOption.style.marginRight = '10px';
            addProjectOption.style.cursor = 'pointer';
            addProjectOption.textContent = '+';

            
            const projectNameElement = document.createElement('span');
            projectNameElement.textContent = project.name;
            projectNameElement.style.flexGrow = '1';
            projectNameElement.style.cursor = 'pointer';

            
            projectNameElement.addEventListener('click', () => {
                projectManager.setCurrentProject(index);
                renderTodos();

                const allprojectNameElements = document.querySelectorAll('span');
                allprojectNameElements.forEach(name => name.classList.remove('active'));

                projectNameElement.classList.add('active');
            });

            addProjectOption.addEventListener('click', (event) => {
                event.stopPropagation();
                const projectName = prompt('Enter the name of the new project:');
                
                if (projectName) {
                    projectManager.addProject(new Project(projectName));
                    projectManager.setCurrentProject(projectManager.projects.length - 1);

        
                    
                
                    renderProjects();
                    
                }
            });
            

            projectElement.appendChild(addProjectOption);
            projectElement.appendChild(projectNameElement);
            projectList.appendChild(projectElement);
        });
    };

   
    

    const renderTodos = () => {
        const currentProject = projectManager.getCurrentProject();
        todoList.innerHTML = '';
        currentProject.todos.forEach((todo, index) => {
            const todoElement = document.createElement('div');
            todoElement.textContent = `${todo.title} - ${todo.dueDate}`;
            todoElement.className = `priority-${todo.priority}`;

            todoElement.addEventListener('click', () => {
                expandTodoDetails(todo, index);
            });
            todoList.appendChild(todoElement);
        });
    };

    const expandTodoDetails = (todo, index) => {
        const todoDetails = document.getElementById('todo-details');
        todoDetails.innerHTML = `
            <h2>${todo.title}</h2>
            <p>${todo.description}</p>
            <p>Due: ${todo.dueDate}</p>
            <p>Priority: ${todo.priority}</p>
            <p>Notes: ${todo.notes}</p>
            <p>Checklist: ${todo.checklist.join(', ')}</p>
            <button id="delete-todo">Delete</button>
             `;
        document.getElementById('delete-todo').addEventListener('click', () => {
            const currentProject = projectManager.getCurrentProject();
            todoDetails.innerHTML = '';
            currentProject.removeTodo(index);
            projectManager.saveToLocalStorage();
            renderTodos();
        });
    };

    const addTodo = (todo) => {
        const currentProject = projectManager.getCurrentProject();
        currentProject.addTodo(todo);
        projectManager.saveToLocalStorage();
        renderTodos();
    };


    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const notes = document.getElementById('notes').value;
        const checklist = document.getElementById('checklist').value.split(',');
        const todo = new Todo(title, description, dueDate, priority, notes, checklist);
        addTodo(todo);
        todoForm.reset();
    });

    return {
        renderProjects,
        renderTodos,
    };
})();

UI.renderProjects();
UI.renderTodos();
