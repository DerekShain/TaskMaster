import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
    constructor(){
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)

    }
  addList(listData) {
    console.log("this is the lists service");
    ProxyState.lists = [...ProxyState.lists, new List(listData)];
  }
  deleteList(listData){
      console.log('deleted list', listData)
      ProxyState.lists = ProxyState.lists.filter(l => l.id !== listData)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listData !== listData)
  }
}

export const listsService = new ListsService();
