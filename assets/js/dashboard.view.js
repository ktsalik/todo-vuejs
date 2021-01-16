let Dashboard = Vue.component('Dashboard', {
  props: ['todos'],
  data: function() {
    return {
      
    };
  },
  methods: {
    openTodo: function(id) {
      router.push({ path: 'todo/' + id });
    },
  },
  created: function() {
    if (localStorage['last-seen']) {
      let lastSeenTodo = this.todos.find((todo) => todo.id == localStorage['last-seen'])
      this.todos.forEach((todo) => todo.lastSeen = false);
      lastSeenTodo.lastSeen = true;
      setTimeout(() => {
        lastSeenTodo.lastSeen = false;
        this.$forceUpdate();
      }, 100);
      localStorage.removeItem('last-seen');
    }
  },
  template: `
    <div class="Dashboard view">
      <router-link
        to="/new"
        class="new-record-container">
        +
      </router-link>

      <div class="list">
        <div
          class="item"
          v-for="todo in todos"
          @click="openTodo(todo.id)"
          :class="{'last-seen': todo.lastSeen}">
          <div class="title">{{todo.title}}</div>
          <div class="text">{{todo.text}}</div>
        </div>
      </div>
    </div>
  `,
});