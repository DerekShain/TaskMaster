import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(taskData) {
    this.taskId = generateId() || taskData.taskId;
    this.listId = taskData.listId;
    this.task = taskData.task;
    this.checked = taskData.checked || "unchecked";
  }
  get TasksTemplate() {
    return /*html*/ `
        <div class="form-group">
        <input class="form-check-input" type="checkbox" id="${this.taskId}" name="${this.taskId}" onclick="app.tasksController.checkBox('${this.taskId}')" ${this.checked}>
        <label class="${this.checked}" for="${this.taskId}">${this.task}</label>
        <i class="fas fa-trash-alt trashPosition" onclick="app.tasksController.deleteTask('${this.taskId}')"></i>
        </div>
        `;
  }
}
