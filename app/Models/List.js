import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { TasksController } from "../Controllers/TasksController.js";
import { ListsController } from "../Controllers/ListsController.js";

export class List {
  constructor(listData) {
    this.id = listData.id || generateId();
    this.name = listData.name;
    this.amount = listData.amount;
    this.color = listData.color;
  }
  get ListsTemplate() {
    return /*html*/ `
        <div class="col-sm-12 col-md-4 display-flex align-items-center py-3">
        <div class="card ">
        <div class="card-header text-white" style="background-color:${this.color}">
        <h2>${this.name}    </h2>
        <div class="text-end">
        <i class="fas fa-trash-alt" selectable onclick="app.listsController.deleteList('${this.id}')"></i>
        </div>
        </div>
        <div class="card-body">
        <form  onsubmit="app.tasksController.addTask('${this.id}')">
        <p class="card-text">${this.Tasks}</p>
        <div class="input-group">
        <input type="text" class="form-control-2" name="task" id="task" required>
          <button class="btn btn-outline-secondary text-dark" type="submit" id="button-addon2">Add</button>
          </div>
          </form>
          </div>
          </div>
          </div>
        `;
  }
  get Tasks() {
    let template = '';
    let foundTasks = ProxyState.tasks.filter(i => i.listId == this.id);
    foundTasks.forEach(i => template += i.TasksTemplate);
    return template;
  }
}
