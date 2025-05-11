🚀 Problems with version1.0:

> Re-rendering the whole list even when just one item changes (checkbox toggled or deleted).

> Building HTML strings manually (slow and error-prone).

> Directly using innerHTML — causes layout thrashing and potential XSS security risks.

| Problem                                      | Solution                                       |
| :------------------------------------------- | :--------------------------------------------- |
| Re-rendering full list on each toggle/delete | **Only change that single element**            |
| Using `innerHTML` and `onchange="..."`       | **Use `createElement` and `addEventListener`** |
| Slow string HTML building                    | **Build DOM tree directly**                    |
