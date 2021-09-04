import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(taskData) {
    console.log("this is the tasks");
    this.id = taskData.id || generateId();
    this.listId = taskData.listId;
    this.task = taskData.task;
    this.amount = taskData.amount;
    this.checkbox = taskData.checkbox
  }
  get TasksTemplate() {
    return /*html*/ `
        <div class="col">
        <input class="form-check-input" type="checkbox" id="checkbox" onchange="app.tasksController.checkBox('${this.id}')">
        <label class="form-check-label" for="checkbox">${this.task}</label>
        
        <i class="fas fa-trash-alt" onclick="app.tasksController.deleteTask('${this.id}')"></i>
        </div>
        
        `;
  }
}
