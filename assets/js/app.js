Vue.use(VueRouter);

const routes = [
  { path: '/', component: Dashboard },
  { path: '/new', component: New },
  { path: '/todo/:id', component: Todo },
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  router: router,
  el: '#App',
  data: {
    theme: 'light',
    todos: [
      {
        id: 1,
        title: 'foo',
        text: 'quxx',
      },
      {
        id: 2,
        title: 'bar',
        text: 'quxxx',
      },
      {
        id: 3,
        title: 'baz',
        text: 'quxxxx',
      },
      {
        id: 4,
        title: 'A big enough title',
        text: 'quxxxxx quxxxxxx quxxxxxxx quxxxxxxxx quxxxxxxxxx quxxxxxxxxxxx quxxxxxxxxxxxx quxxxxxxxxxxxxxx',
      },
    ],
  },
  created: function() {
    
  },
  methods: {
    onAddTodo: function(data) {
      let todoId = this.todos.length + 1;
      this.todos.push({
        id: todoId,
        title: data.title,
        text: data.text,
      });
    },
    onEditTodo: function(data) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id == data.id) {
          this.todos[i].title = data.title;
          this.todos[i].text = data.text;
          break;
        }
      }
    },
  },
});