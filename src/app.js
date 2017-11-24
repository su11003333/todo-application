var app = new Vue({
  el: '#app',

  data: {
    todo: null,
    todoItems: [],
    editTodo: null,
  },
  methods: {

    add(todo) {
      if(!this.todoIsValid){
        return;
      }
      this.todoItems.push({
        content: todo,
        finished: false,
        isEdited: false,
      });
      this.todo = null;
    },
    edit(todo){
      this.editTodo = todo.content;
           todo.isEdited = true;
    },
    remove(todo){
      this.todoItems = this.todoItems.filter(item =>  item !== todo);
    },
    cancelEdit(todo) {
            this.editTodo = null;
            todo.isEdited = false;
        },
    update(todo) {
      if (!this.editTodoIsValid) {
          return;
      }

            todo.content = this.editTodo;
            todo.isEdited = false;

            // Reset the edit todo.
            this.editTodo = null;
        }
  },
  computed: {
    isBeingEdited() {
            return this.todoItems
                    .filter(item => item.isEdited)
                    .length > 0;
        },
    todoIsValid(){
      return !!this.todo;
    },
    editTodoIsValid() {
            return !!this.editTodo;
        },
  },
});
