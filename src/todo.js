/* global Vue */
Vue.component('todo-item', {
  props: ['todo'],
  template: `<li v-bind:class="{ editing: editing, readOnly: readOnly, done: done }">
              <input type="checkbox" v-model="done">
              <span v-on:dblclick="changeState()">{{ todo.text }}</span>
              <input v-on:blur="changeState()" v-on:keyup.enter="changeVal()" type="text" v-model="todo.text" autofocus>
             </li>`,
  data: function () {
    return {
      editing: false,
      readOnly: true,
      done: true
    };
  },
  methods: {
    changeState: function () {
      this.$data.editing = !this.editing;
      this.$data.readOnly = !this.readOnly;
      if (this.editing) {
        this.$nextTick(() => this.$el.getElementsByTagName('input')[1].focus());
      }
    },
    changeVal: function () {
      this.$el.children[1].blur();
    }
  },
});
