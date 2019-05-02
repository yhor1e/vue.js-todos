/* global Vue */

Vue.component('new-todo', {
  template: '<input type="text" placeholder="new todo" v-on:keyup.enter="add()">',
  methods: {
    add: function(){
      this.$parent.todos.push({id: (new Date()).getTime(), text: this.$el.value});
      this.$el.value = '';
    }
  },
});
