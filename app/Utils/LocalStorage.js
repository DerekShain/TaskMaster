import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js"


export function saveState(){
    localStorage.setItem('TasksAtHand', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks,
    checkbox: ProxyState.checkbox
    }))
}

export function loadState(){
    let data = JSON.parse(localStorage.getItem('TasksAtHand'))
    console.log('load state', data)
    if(data !=null){
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
    console.log('loaded state')
}