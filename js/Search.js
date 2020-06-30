class Search {// eslint-disable-line no-unused-vars
  constructor() {
    this.searchInput = document.querySelector('.search__input');
    this.searchBtn = document.querySelector('.search__btn');
    this.listUl = document.querySelector('.list__ul');
    //console.log('listUlFrom Search: ', this.listUl);
    this.searchBtn.addEventListener('click', this.searchTask.bind(this));
    this.searchTask();
  }

  searchTask = () => {
    this.searchText = this.searchInput.value.toLowerCase();
    todos = todos.filter(todo => todo.textContent.toLowerCase().includes(this.searchText)); //eslint-disable-line no-undef
    this.listUl.textContent = '';
    todos.forEach(todo => this.listUl.appendChild(todo)); //eslint-disable-line no-undef
    this.searchInput.value = '';
  }
}
