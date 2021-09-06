import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(listData) {
    this.id = listData.id || generateId();
    this.name = listData.name;
    this.color = listData.color;
  }
  get ListsTemplate() {
    return /*html*/ `
        <div class="col-sm-12 col-md-4 display-flex align-items-center py-3 border-primary ">
          <div class="card bg-dark">
            <div class="card-header text-white" style="background-color:${this.color}">
            <h2>${this.name}
            <i class="fas fa-trash-alt bigTrash text-light" selectable onclick="app.listsController.deleteList('${this.id}')"></i>
            </h2>
            <p>Tasks Completed ${this.Count} </p>
            </div>
            <div class="card-body">
              <form  onsubmit="app.tasksController.addTask('${this.id}')">
              <div class="row">
                <label for="tasker" class="card-text">${this.Tasks}</label>
                </div>
                  <div class="form-group">
                    <input type="text" class="form-control-2" name="tasker" id="task" required minLength="3" maxLength="50">
                    <button class="btn btn-outline-secondary text-light" type="submit" id="button-addon2">Add New Task</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        `;
  }
  get Tasks() {
    let template = "";
    let foundTasks = ProxyState.tasks.filter((i) => i.listId === this.id);
    foundTasks.forEach((i) => (template += i.TasksTemplate));
    return template;
  }
  get Count() {
    let totalCount = 0;
    let checkCount = 0;
    let filterTasks = ProxyState.tasks.filter((t) => t.listId == this.id);
    let checkedTasks = filterTasks.filter((c) => c.checked === "checked");
    checkCount = checkedTasks.length;
    totalCount = filterTasks.length;
    return checkCount + " out of " + totalCount;
  }
}
