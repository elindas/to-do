

const listTodos = document.getElementsByClassName("todos")

function addTask() {
    let input = document.getElementById("todo").value;
    let node = document.createElement("li");
    let textnode = document.createTextNode(input);
    node.setAttribute("class", "todos")
    node.setAttribute("ondblclick", "edit(event)")
    node.setAttribute("id", `todo-${listTodos.length}`)
    node.appendChild(textnode);
    document.getElementById("newList").appendChild(node);


    let removeTask = document.createElement("input");
    removeTask.setAttribute("type", "button");
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener(
        "click",
        function (e) {
            node.parentNode.removeChild(node);
        },
        false
    );
    node.appendChild(removeTask);
}

function edit(event) {

    const id = event.target.id
    const text = prompt("Edit todo:")
    // console.log(id);

    const editTodo = document.getElementById(id)
    editTodo.innerText = text

    let removeTask = document.createElement("input");
    removeTask.setAttribute("type", "button");
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener(
        "click",
        function (e) {
            editTodo.parentNode.removeChild(editTodo);
        },
        false
    );
    editTodo.appendChild(removeTask)
}