const New = Vue.component('New', {
  props: ['todos'],
  data: function() {
    return {
      view: {
        title: '',
        text: '',
      },
    };
  },
  methods: {
    goBack: function() {
      history.back();
    },
    add: function() {
      if (this.view.title.trim().length) {
        let todoId = this.todos.length + 1;
        this.$emit('add', {
          id: todoId,
          title: this.view.title,
          text: this.view.text,
        });
        localStorage.setItem('last-seen', todoId);
        history.back();
      }
    },
  },
  template: `
    <div class="New view">
      <div
        @click="goBack()"
        class="btn-back">
        ←
      </div>

      <todo
        :view="view"></todo>

      <button
        class="btn-add"
        @click="add()">
        Add
      </button>
    </div>
  `,
  components: {
    'todo': TodoComponent,
  },
});