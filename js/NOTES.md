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
