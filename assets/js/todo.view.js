let Todo = Vue.component('Todo', {
  props: ['todos'],
  data: function() {
    return {
      view: {

      },
    };
  },
  created: function() {
    let todo = this.todos.find((todo) => todo.id == this.$route.params.id);
    this.view.title = todo.title;
    this.view.text = todo.text;
  },
  methods: {
    goBack: function() {
      history.back();
    },
    edit: function() {
      if (this.view.title.trim().length) {
        this.$emit('edit', {
          id: this.$route.params.id,
          title: this.view.title,
          text: this.view.text,
        });
        history.back();
      }
    },
  },
  template: `
    <div class="Todo view">
      <div
        @click="goBack()"
        class="btn-back">
        ←
      </div>

      <todo
        :view="view"></todo>

      <button
        class="btn-edit"
        @click="edit()">
        Edit
      </button>
    </div>
  `,
  components: {
    'todo': TodoComponent,
  }
});