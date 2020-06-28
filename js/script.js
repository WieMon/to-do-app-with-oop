let todos = [];
console.log('todos: ', todos); //ok

class Search {
  constructor() {
    this.searchInput = document.querySelector('.search__input');
    this.searchBtn = document.querySelector('.search__btn');
    this.listUl = document.querySelector('.list__ul');
    this.searchBtn.addEventListener('click', this.searchTask.bind(this));
  }

  searchTask() {
    this.searchText = this.searchInput.value.toLowerCase();
    //console.log('searchText: ', this.searchText); //ok
    todos = todos.filter(todo => todo.textContent.toLowerCase().includes(this.searchText)); //ok

    this.listUl.textContent = ''; //nie działa
    //console.log('listUl: ', this.listUl); //ok
    todos.forEach(todo => this.listUl.appendChild(todo));//?

  }
}

class Add {
  constructor () {
    this.addInputTask = document.querySelector('.add__input-task');
    this.addInputComment = document.querySelector('.add__input-comment');
    this.addInputDate = document.querySelector('.add__input-date');
    this.addBtn = document.querySelector('.add__btn');
    this.add = document.querySelector('.add');
    this.listUl = document.querySelector('.list__ul');//powtarzam z Search
    this.add.addEventListener('submit', this.addTask.bind(this));
    this.clearInputs();//?
  }

  clearInputs () {//?
    this.addInputTask.value = '';
    this.addInputDate.value = '';
    this.addInputComment.value = '';
  }
  addTask (e) {
    e.preventDefault();
    this.titleTask = this.addInputTask.value;
    //console.log('titleTask: ', this.titleTask);
    this.minDate = new Date().toISOString().slice(0,10);
    //console.log('minDate: ', this.minDate);
    this. dateTask = this.addInputDate.value;
    //console.log('dateTask: ', this.dateTask);
    this.commentTask = this.addInputComment.value;
    //console.log('commentTask: ', this.commentTask);

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
    //renderList();
    this.clearInputs();
    // this.numberTasks.textContent = this.listTasks.length;
    // this.task.querySelector('button').addEventListener('click', this.removeTask.bind(this));//gdzie wstawic te funkcje?
  }
}

class RenderList {

}

class RemoveTask {

}
// class createToDo {

//   new Search()
//   new Add()
//   new RemoveTask()
// }

new Search();
new Add();
