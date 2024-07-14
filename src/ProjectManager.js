import { Project, Todo } from './Todo.js';

class ProjectManager {
  constructor() {
    this.projects = this.loadFromLocalStorage() || [];
    this.defaultProject = new Project('Project 1');

    if (this.projects.length === 0) {
      this.projects.push(this.defaultProject);
    }

    this.currentProjectIndex =
      this.loadCurrentProjectIndexFromLocalStorage() || 0;
    this.currentProject = this.projects[this.currentProjectIndex];
  }

  addProject(project) {
    this.projects.push(project);
    this.saveToLocalStorage();
  }

  removeProject(index) {
    this.projects.splice(index, 1);
    this.saveToLocalStorage();
  }

  setCurrentProject(index) {
    this.currentProjectIndex = index;
    this.saveCurrentProjectIndexToLocalStorage();
    this.currentProject = this.projects[this.currentProjectIndex];
  }

  getCurrentProject() {
    return this.currentProject;
  }

  saveToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
  loadFromLocalStorage() {
    const projectsJson = localStorage.getItem('projects');
    if (projectsJson) {
      const projectsData = JSON.parse(projectsJson);
      return projectsData.map((project) => {
        const newProject = new Project(project.name);
        project.todos.forEach((todo) => {
          newProject.addTodo(
            new Todo(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.priority,
              todo.notes,
              todo.checklist,
              (todo.completed = false),
            ),
          );
        });
        return newProject;
      });
    }
    return null;
  }

  saveCurrentProjectIndexToLocalStorage() {
    localStorage.setItem('currentProjectIndex', this.currentProjectIndex);
  }
  loadCurrentProjectIndexFromLocalStorage() {
    const index = localStorage.getItem('currentProjectIndex');
    return index ? parseInt(index) : 0;
  }
}

export { ProjectManager };
