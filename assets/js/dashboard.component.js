let Dashboard = Vue.component('Dashboard', {
  data: function() {
    return {
      foo: 'bar',
    };
  },
  template: `
    <div class="Dashboard">
      dashboard
      {{foo}}
    </div>
  `,
});