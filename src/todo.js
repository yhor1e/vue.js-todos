/* global Vue */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.id }} - {{ todo.text }}</li>'
});
