import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

export class TasksController {
  constructor() {
    console.log("tasksController");
  }

  
  addTask(listId) {
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    //@ts-ignore
    let form = event.target;
    let taskData = {
      listId: listId,
      task: form.task.value,
    };
    tasksService.addTask(taskData);
    console.log("tasks", taskData);
    form.reset();
  }

  deleteTask(taskData) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(taskData);
        tasksService.deleteTask(taskData);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  checkBox(taskData) {
    tasksService.addCheck(taskData)
  }
}
