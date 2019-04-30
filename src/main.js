/* global Vue*/

let todos = [
  {id: 1, text: 'foo'},
  {id: 2, text: 'bar'},
  {id: 3, text: 'baz'},
  {id: 4, text: 'qux'}
];


new Vue({
  el: '#app',
  template: '<app v-bind:todos="todos"></app>',
  data: {
    todos: todos
  }
});
