import {sendAllTasks} from "../network/todos.api"

export const syncServer = store => next => action => {
    next(action);
    const tasks = store.getState().tasks.items;
    tasks.forEach((item)=> {
        console.log("log in middleware suncServer" ,item);
        sendAllTasks(item)});
};
