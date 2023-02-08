const { VITE_SERVER_URL } = import.meta.env;//import Vite-Server-URL

console.log(`SERVER_URL: ${VITE_SERVER_URL}`);
console.log(`MODE: ${import.meta.env.MODE}`);


// send all tasks
export async function sendAllTasks(tasks) {
    const covertedTasks = convertTodosToServer(tasks);
    const endpoint = `${VITE_SERVER_URL}/api/tasks`;
    await (await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(covertedTasks)
    }));
};

// get all tasks
export async function getAllTasks() {
    const endpoint = `${VITE_SERVER_URL}/api/tasks`;
    const response = convertTodosFromServer((await (await fetch(endpoint)).json()));
    console.log({ response });
    return response;
};

// Converts data stracture from server to schema of ui data
function convertTodosFromServer(serverItems) {
    return serverItems.map((item) => {
        return {
            id: item.id,
            task: item.task,
            isDone: item.isDone,
            show: item.show
        };
    });
};

function convertTodosToServer(serverItems) {
        return {
            id: serverItems.id,
            task: serverItems.task,
            isDone: serverItems.isDone,
            show: serverItems.show
        };
};