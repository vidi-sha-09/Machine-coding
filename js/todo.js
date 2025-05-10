let list = [];

const addItem = function () {
  console.log(document.getElementById("item").value);
  let value = document.getElementById("item").value;
  list.push(value);
  //   list += document.getElementById("item").value;
  let items = "";
  for (let i = 0; i < list.length; i++) {
    items += `
<li class="list-items">${list[i]} <button>DONE</button><button>DEL</button></li>`;
  }

  document.getElementById("to-do-list").innerHTML = items;
};
