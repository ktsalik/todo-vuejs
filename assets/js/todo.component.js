const TodoComponent = Vue.component('TodoComponent', {
  props: ['view'],
  data: function() {
    return {
      
    };
  },
  template: `
  <div class="todo component">
    <input type="text" v-model="view.title">
    <textarea v-model="view.text"></textarea>
  </div>
  `,
});