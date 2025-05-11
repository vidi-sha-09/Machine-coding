🚀 Problems with version1.0:

1. Re-rendering the whole list even when just one item changes (checkbox toggled or deleted).

2. Building HTML strings manually (slow and error-prone).

3. Directly using innerHTML — causes layout thrashing and potential XSS security risks.

| Problem                                      | Solution                                       |
| :------------------------------------------- | :--------------------------------------------- |
| Re-rendering full list on each toggle/delete | **Only change that single element**            |
| Using `innerHTML` and `onchange="..."`       | **Use `createElement` and `addEventListener`** |
| Slow string HTML building                    | **Build DOM tree directly**                    |

V2

✅ Super fast.
✅ Memory-efficient.
✅ Safer (no XSS from innerHTML).
✅ React-like thinking (change small part of DOM, not full re-render).
✅ Professional level JavaScript!

🚀 How it Works:

1. When adding a new todo:

   1. Push to the list.
   2. Only create one `<li>` and add it to `<ul>`.

2. When toggling:

   1. Find the `<span>` related to that item by data-id.
   2. Apply line-through style directly without touching the entire list.

3. When deleting:
   1. Find the specific `<li>` by id and .remove() it.
   2. Filter the list array.

V3
structure:
| Layer | Contains |
| :------------------------------ | :------------------------------------------- |
| IIFE wrapper `(function(){})()` | Protects everything inside. |
| Private variables | `list`, `inputElement`, `listElement` |
| Private helper functions | `createTodoItem`, `toggleTodo`, `deleteItem` |
| Public exposed API | `{ addItem }` through `window.todoApp` |

private functions:
| Function Name | What It Does |
| :--------------------- | :------------------------------------------------------------------------ |
| `renderListItem(item)` | Creates and returns a full `<li>` HTML element for the todo. |
| `addItem()` | Reads user input, creates a todo object, appends it to the DOM and array. |
| `toggleTodo(id)` | Toggles completed status and updates the DOM's style. |
| `deleteItem(id)` | Removes a todo from the array and DOM. |

1. ✅ Encapsulation

   > Hide internal details. Only expose the functions the outside world needs.

2. ✅ Separation of concerns

   > UI creation logic (createTodoItem) is separated from data management (list).

3. ✅ Avoid Global Pollution

   > You don't dump random variables (list, toggleTodo, etc.) on the window object.

4. ✅ More maintainable

   > In the future, you can change how toggleTodo or deleteItem works without worrying about external code depending on them.

5. ✅ Scalability
   > Easy to add more features later (e.g., "Edit" button) without touching the outside code.
