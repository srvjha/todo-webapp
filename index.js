const input_text = document.getElementById("input-text");
const add_todo = document.getElementById("add-btn");
const ul_list = document.getElementById("todo-list");

const todos = [];

add_todo.addEventListener("click", () => {
    const todo = input_text.value.trim();
    if (!todo) {
        alert("Todo Can't be Empty!!");
        return;
    }

    todos.push(todo);

    const li_item = document.createElement("li");
    const span_text = document.createElement("span");
    const edit_btn = document.createElement("button");
    const delete_btn = document.createElement("button");

    span_text.innerText = todo;
    edit_btn.innerText = "Edit";
    delete_btn.innerText = "X";

    li_item.appendChild(span_text);
    li_item.appendChild(edit_btn);
    li_item.appendChild(delete_btn);
    ul_list.appendChild(li_item);
    input_text.value = "";

    // DELETE TODO
    delete_btn.addEventListener("click", () => {
        const index = todos.indexOf(todo);
        if (index !== -1) todos.splice(index, 1); 
        li_item.remove();
    });

    // EDIT TODO
    edit_btn.addEventListener("click", () => {
        if (edit_btn.innerText === "Edit") {
            edit_btn.innerText = "Save";

            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span_text.innerText;
            span_text.replaceWith(editInput);

           
        } else {
            edit_btn.innerText = "Edit";

            const editInput = li_item.querySelector("input");
            span_text.innerText = editInput.value;
            editInput.replaceWith(span_text);

            
        }
    });
});
