import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  listsController = new ListsController();
  tasksController = new TasksController();
}
loadState();
window["app"] = new App();
