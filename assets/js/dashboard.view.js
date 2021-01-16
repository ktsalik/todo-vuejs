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