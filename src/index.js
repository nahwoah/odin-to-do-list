import "./style.css";

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const newitem = document.getElementById('new-item');
const submit = newitem.querySelector('#submitBtn');
const add_title = newitem.querySelector('#add-title');
const add_description = newitem.querySelector('#add-description');
const add_notes = newitem.querySelector('#add-notes');
const add_completed = newitem.querySelector('#add-completed');
const container = document.querySelector("#container");


class List {
    constructor(title, description, notes) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.completed = false;
    }
}

const toDoList = []

function addToDoItem() {
    const item = new List(add_title.value, add_description.value, add_notes.value)

    toDoList.push(item);

}

List.prototype.changeCompleted = function () {
    if (!this.completed) {
        this.completed = true;
    } else {
        this.completed = false;
    }
}

function clearTable() {
    while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
    }
}

function addToTable() {
    clearTable();


    toDoList.forEach(item => {
        const tableRow = document.createElement('tr');


        Object.keys(item).forEach((key, idx) => {

            if (idx === List.length) {
                const tdCompleted = document.createElement('td');
                const completedBtn = document.createElement('button');
                completedBtn.style.height = '40px'
                completedBtn.style.width = '40px'
                completedBtn.style.background = 'transparent'
                completedBtn.style.border = '2px solid white'
                completedBtn.style.borderRadius = '50%'
                if (!item.completed) {
                    completedBtn.textContent = '❌';
                } else {
                    completedBtn.textContent = '✔️';
                }

                completedBtn.onclick = function () {
                    item.changeCompleted();
                    if (item.completed) {
                        completedBtn.textContent = '✔️';
                    } else {
                        completedBtn.textContent = '❌';
                    }

                }

                completedBtn.setAttribute("data-completed", item.id);
                tableRow.appendChild(tdCompleted)
                tdCompleted.appendChild(completedBtn);



                const tdDel = document.createElement('td');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';


                deleteBtn.onclick = function () {

                    tableRow.remove();
                    toDoList.splice(toDoList.findIndex(el => el.id === item.id), 1);
                }

                tableRow.appendChild(tdDel);
                tdDel.appendChild(deleteBtn);
            }else if(idx === 0 ){

            
            } else if (idx <= List.length - 1) {
                const tbData = document.createElement('td');
                tbData.textContent = item[key];
                tableRow.appendChild(tbData);
            }
        })
        tbody.appendChild(tableRow);

    })
}

function drawItem(){

    const item = new List(add_title.value, add_description.value, add_notes.value)

    toDoList.push(item);

    // addToDoItem()
    const itemdiv = document.createElement("div");
    itemdiv.id = "itemdiv"

    const icon = document.createElement("button")
    icon.id = 'icon'
    const title = document.createElement("span");
    const desc = document.createElement("span");
    const notes = document.createElement("span")

    // icon.textContent = '◯'

    icon.addEventListener('mouseover', e => {
        icon.textContent = '✓' //  fallback   ✓ ✔️
        icon.style.color = 'aquamarine'
    })
    icon.addEventListener('mouseleave', e =>{
        icon.textContent = ''
    })

    title.textContent = `${item.title} `;
    desc.textContent = `${item.description} `;
    notes.textContent = `${item.notes} `;

    itemdiv.append(icon, title, desc, notes);
    container.appendChild(itemdiv);
}

submit.addEventListener("click", function (e) {

    e.preventDefault()

    // addToDoItem();
    // addToTable();
    drawItem()

    newitem.close();
    add_title.value = '';
    add_description.value = '';
    add_notes.value = '';
    add_completed.checked = false;

})

// let obj = new List(prompt("Enter title"), prompt("Enter a desc"))
// jsonObject.push(obj)



// let jsonString = JSON.stringify(jsonObject)

// console.log("object", jsonObject)
// console.log("stringified", jsonString)


