import "./style.css";

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const newitem = document.getElementById('new-item');
const submit = newitem.querySelector('#submitBtn');
const add_title = newitem.querySelector('#add-title');
const add_description = newitem.querySelector('#add-description');
const add_notes = newitem.querySelector('#add-notes');
const add_completed = newitem.querySelector('#add-completed');

class List{
    constructor(title, description, notes){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.completed = false;
    }
}

const toDoList = []

function addToDoItem() {
    const item = new List(add_title.value, add_description.value, add_notes.value, add_completed.checked)

    toDoList.push(item);

}

console.log(toDoList)

// let obj = new List(prompt("Enter title"), prompt("Enter a desc"))
// jsonObject.push(obj)



// let jsonString = JSON.stringify(jsonObject)

// console.log("object", jsonObject)
// console.log("stringified", jsonString)


