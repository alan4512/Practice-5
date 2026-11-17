// A7 – OOP + DOM. Open index.html with a local server.
class TodoItem {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

class TodoList {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItem(title) {
    const item = new TodoItem(title);
    this.items.push(item);
    return item;
  }

  render(containerElement) {
    containerElement.replaceChildren();
    const ul = document.createElement("ul");

    for (const item of this.items) {
      const li = document.createElement("li");
      const status = item.completed ? "[x]" : "[ ]";
      li.textContent = `${status} ${item.title}`;
      ul.appendChild(li);
    }

    containerElement.appendChild(ul);
  }
}

const list = new TodoList("My Tasks");
const firstTask = list.addItem("Learn JavaScript");
list.addItem("Study OOP");
list.addItem("Complete homework");
firstTask.toggle();

const container = document.getElementById("todo-container");
list.render(container);
