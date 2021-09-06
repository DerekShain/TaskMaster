import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

class TasksService {
  constructor() {
    ProxyState.on("tasks", saveState);
  }

  addTask(taskData) {
    console.log("this is the tasks service");
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)];
  }
  deleteTask(taskId) {
    ProxyState.tasks = ProxyState.tasks.filter((t) => t.taskId !== taskId);
  }
  addCheck(taskId) {
    let foundTask = ProxyState.tasks.find((t) => t.taskId === taskId);
    console.log(foundTask);
    if (foundTask.checked === "unchecked") {
      foundTask.checked = "checked";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Task Finished!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      foundTask.checked = "unchecked";
    }
    saveState();
    loadState();
  }
}

export const tasksService = new TasksService();
