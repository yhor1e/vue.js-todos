/* global Vue */
Vue.component('todo-item', {
  props: ['todo'],
  template: `<li v-bind:class="{ editing: editing, readOnly: readOnly } "v-on:dblclick="changeState()">
               <span>{{ todo.text }}</span>
               <input v-on:blur="changeState()" v-on:keyup.enter="changeVal()" type="text" v-model="todo.text" autofocus>
             </li>`,
  data: function(){
    return {
      editing: false,
      readOnly: true
    };
  },
  methods: {
    changeState: function(){
      this.$data.editing = !this.editing;
      this.$data.readOnly = !this.readOnly;
      if(this.editing){
        this.$nextTick(() => this.$el.getElementsByTagName('input')[0].focus());
      }
    },
    changeVal: function(){
      this.$el.children[1].blur();
    }
  },
});
