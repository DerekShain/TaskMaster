import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  constructor() {
    // ProxyState.on('tasks', saveState)

  }
  
  completeTask(taskId) {
    console.log(taskId);
    ProxyState.checkbox = [...ProxyState.checkbox, new Task(taskId)];
    ProxyState.on('checkbox', saveState)

  }
  addTask(taskData) {
    console.log("this is the tasks service")
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
  }
  deleteTask(taskData){
    ProxyState.tasks = ProxyState.tasks.filter(t => 
     
      // console.log(t.id)
      t.id !== taskData
      );
  }
}

export const tasksService = new TasksService();
