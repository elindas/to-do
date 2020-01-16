
function addTask() {
    let input = document.getElementById("todo").value;
    let node = document.createElement("li");
    let textnode = document.createTextNode(input);
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