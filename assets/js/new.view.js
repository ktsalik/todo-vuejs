const New = Vue.component('New', {
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
        this.$emit('add', {
          title: this.view.title,
          text: this.view.text,
        });
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