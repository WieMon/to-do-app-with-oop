let todos = [];

class ToDoList { // eslint-disable-line no-unused-vars

  constructor() {
    this.addInputTask = document.querySelector('.add__input-task');
    this.addInputComment = document.querySelector('.add__input-comment');
    this.addInputDate = document.querySelector('.add__input-date');
    this.addBtn = document.querySelector('.add__btn');
    this.add = document.querySelector('.add');
    this.listUl = document.querySelector('.list__ul');//powtarzam z Search
    this.listTasks = document.getElementsByClassName('task');
    this.numberTasks = document.querySelector('.list__title span');

    this.add.addEventListener('submit', this.addTask.bind(this));
    this.clearInputs();
    this.renderList();
    //this.addTask(event) ;
    //this.removeTask(event);
    console.log('this: ', this);
  }


  clearInputs = () => {
    this.addInputTask.value = '';
    this.addInputDate.value = '';
    this.addInputComment.value = '';
  }

  renderList = () => {
    this.listUl.textContent = '';
    todos.forEach((todo, key) => {
      todo.dataset.key = key;
      this.listUl.appendChild(todo);
    });
  }

  addTask = (event) => {
    console.log('eventFromAdd: ', event);
    console.log('thisFromAdd', this);

    event.preventDefault();
    this.titleTask = this.addInputTask.value;
    this.minDate = new Date().toISOString().slice(0,10);
    this.dateTask = this.addInputDate.value;
    this.commentTask = this.addInputComment.value;

    if (this.titleTask === '' || this.dateTask === '') {
      alert ('Invalid input - missing task name or date.');
      this.clearInputs();
      return;
    }

    if (this.dateTask < this.minDate) {
      alert ('Invalid date - you cannot select the past date.');
      this.clearInputs();
      return;
    }

    this.task = document.createElement('li');
    this.task.className = 'task';
    this.task.innerHTML = `<strong>Task:</strong> ${this.titleTask} <br><strong>Comments:</strong> ${this.commentTask}<br><strong>Due date:</strong> ${this.dateTask} <button>Delete</button>`;
    this.listUl.appendChild(this.task);
    if(this.dateTask === this.minDate) {
      this.task.style.color = 'red';
    }
    todos.push(this.task);
    this.renderList();
    this.clearInputs();
    this.numberTasks.textContent = this.listTasks.length;

    this.task.querySelector('button').addEventListener('click', this.removeTask.bind(this));
  }

  removeTask = (event) => {
    event.target.parentNode.remove();
    console.log('eventFromRemove: ', event);
    console.log('eventTargetFromRemove: ', event.target);
    console.log('thisFromRemove: ', this);
    this.index = event.target.parentNode.dataset.key;
    todos.splice(this.index, 1);
    this.numberTasks.textContent = this.listTasks.length;
    this.renderList();
  }
}


