// projectManager.js

import { Project } from './Todo.js';

class ProjectManager {
    constructor() {
        this.projects = [];
        this.defaultProject = new Project('Project 1');
        this.projects.push(this.defaultProject);
        this.currentProject = this.defaultProject;
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    setCurrentProject(index) {
        this.currentProject = this.projects[index];
    }

    getCurrentProject() {
        return this.currentProject;
    }
}

// Export the ProjectManager class for use in other modules
export { ProjectManager };
