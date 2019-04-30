/* global Vue */
Vue.component('app', {
  props: ['todos'],
  template: '<todos v-bind:todos="todos"></todos>'
});
