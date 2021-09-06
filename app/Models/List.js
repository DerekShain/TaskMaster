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
        <div class="col-sm-12 col-md-4 display-flex align-items-center py-3">
          <div class="card ">
            <div class="card-header text-white" style="background-color:${this.color}">
              <h2>${this.name}, ${this.Count} </h2>
                <div class="text-end">
                  <i class="fas fa-trash-alt" selectable onclick="app.listsController.deleteList('${this.id}')"></i>
                </div>
            </div>
            <div class="card-body">
              <form  onsubmit="app.tasksController.addTask('${this.id}')">
                <label for="tasker" class="card-text">${this.Tasks}</label>
                  <div class="form-group">
                    <input type="text" class="form-control-2" name="tasker" id="task" required minLength="3" maxLength="50">
                    <button class="btn btn-outline-secondary text-dark" type="submit" id="button-addon2">Add</button>
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
    return checkCount + "/" + totalCount;
  }
}
