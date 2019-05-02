/* global Vue */
Vue.component('todos', {
  props: ['todos'],
  template: `
  <ul>
    <new-todo></new-todo>
    <todo-item v-for="todo in todos"
      v-bind:todo="todo"
      v-bind:key="todo.id">
    </todo-item>
  </ul>
  `
});
