<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofoucs="autofocus"
      placeholder="接下来要去做什么？"
      @keyup.enter="addTodo"
    >
    <Item
      v-for="todo in filterdTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
      />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAll="clearAllCompleted"
    ></Tabs>
  </section>
</template>

<script>
import Tabs from './tabs.vue';
import Item from './item.vue';

const id = 0;

export default {
  components: {
    Item,
    Tabs,
  },
  data() {
    return {
      todos: [],
      filter: 'all',
    };
  },
  computed: {
    filterdTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }

      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed);
    },
  },
  methods: {
    addTodo(e) {
      const id = id + 1;
      this.todos.unshift({
        id,
        content: e.target.value.trim(),
        completed: false,
      });
      e.target.value = '';
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      console.log(123);

      this.todos = this.todos.filter(todo => !todo.completed);
    },
  },
};
</script>


<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color :red;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
