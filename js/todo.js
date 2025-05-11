//V3
(function () {
  list = [];
  const inputElement = document.getElementById("item");
  const listElement = document.getElementById("to-do-list");

  const addItem = function () {
    const inputText = inputElement.value.trim();
    if (!inputText) return;

    let todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    console.log(inputText, todo);
    list.push(todo);
    renderListItem(todo);
    inputElement.value = "";
  };

  const toggleTodo = function (id) {
    const item = list.find((t) => t.id === id);
    if (item) {
      item.completed = !item.completed;
      const spanToToggle = document.querySelector(`span[data-id='${id}']`);
      if (spanToToggle) {
        if (item.completed) spanToToggle.style.textDecoration = "line-through";
        else spanToToggle.style.textDecoration = "";
      }
    }
  };

  const deleteItem = function (id) {
    list = list.filter((t) => t.id !== id);
    const itemToDel = document.getElementById(`item-${id}`);
    if (itemToDel) itemToDel.remove();
  };

  const renderListItem = function (item) {
    const li = document.createElement("li");
    li.className = "list-items";
    li.id = `item-${item.id}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => toggleTodo(item.id));

    const span = document.createElement("span");
    span.textContent = item.text;
    span.setAttribute("data-id", item.id);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteItem(item.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    listElement.appendChild(li);
  };
  window.todoApp = {
    addItem,
  };
})();
