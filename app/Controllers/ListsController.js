import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _drawLists() {
  let template = "";
  ProxyState.lists.forEach((list) => (template += list.ListsTemplate));
  document.getElementById("taskLists").innerHTML = template;
}

export class ListsController {
  constructor() {
    ProxyState.on("lists", _drawLists);
    ProxyState.on("tasks", _drawLists);
    _drawLists();
  }

  addList() {
    event.preventDefault();
    console.log("this adds list");
    /**
     * @type {HTMLFormElement}
     */
    //@ts-ignore
    const form = event.target;
    const listData = {
      name: form.listName.value,
      color: form.color.value,
    };
    console.log(listData);
    try {
      listsService.addList(listData);
    } catch (e) {
      form.make.classList.add("border-danger");
      console.error("uh oh need to fix something", e);
      return;
    }
    form.reset();
  }

  deleteList(listData) {
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
        listsService.deleteList(listData);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
}
