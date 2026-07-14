import "./style.css";

class List{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

let jsonObject = []

let obj = new List(prompt("Enter title"), prompt("Enter a desc"))

jsonObject.push(obj)

let obj2 = new List(prompt("Enter title"), prompt("Enter a desc"))
jsonObject.push(obj2)

let jsonString = JSON.stringify(jsonObject)

console.log("object", jsonObject)
console.log("stringified", jsonString)


