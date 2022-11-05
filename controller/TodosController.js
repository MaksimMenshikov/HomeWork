class TodosController {
    #collection = null;
    #listView = null;
    #formView=null;

    constructor(container) {
        console.log(container);

        this.#listView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
            
        });
        container.append(this.#listView.el);

        this.#collection = new TodosCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });
        this.#formView=new FormView({
            onSave:(newTask)=>this.saveNewTodo(newTask)
        });
        container.append(this.#formView.el) 
    } 
    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    saveNewTodo(newTask) { this.#collection.saveNewTodo(newTask).then(() => {
        this.#listView.renderList(this.#collection.list);
    })
}
}