let list = [];

const addItem = function () {
  console.log(document.getElementById("item").value);
  let todo = {
    id: Date.now(),
    text: document.getElementById("item").value,
    completed: false,
  };
  list.push(todo);

  renderList(list);
};
const toggleTodo = function (id) {
  const item = list.find((t) => t.id === id);
  if (item) {
    item.completed = !item.completed;
    renderList(list);
  }
};
const deleteItem = function (id) {
  list = list.filter((t) => t.id !== id);
  renderList(list);
};
const renderList = function (list) {
  let items = "";
  for (let i = 0; i < list.length; i++) {
    items += `
    <li class="list-items">
      <input type="checkbox" onchange="toggleTodo(${list[i].id})"  ${
      list[i].completed ? "checked" : ""
    }/>
        <span style="${
          list[i].completed ? "text-decoration: line-through" : ""
        }">${list[i].text}</span>
      <button onclick="deleteItem(${list[i].id})">Delete</button>
    </li>`;
  }

  document.getElementById("to-do-list").innerHTML = items;
  document.getElementById("item").value = "";
};
