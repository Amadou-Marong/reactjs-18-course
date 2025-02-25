import {v4 as uuidv4} from "uuid";
const todos = [
    {
        id: uuidv4(),
        title: "Learn React",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Learn Vue",
        completed: false,
    },
    {
        id: uuidv4(),
        title: "Learn Svelte",
        completed: false,
    },
];

export default todos;