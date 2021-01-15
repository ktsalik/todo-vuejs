const routes = {
  '/': Dashboard,
}

var app = new Vue({
  el: '#App',
  data: {
    
  },
  render(h) {
    return h(Dashboard);
  },
});