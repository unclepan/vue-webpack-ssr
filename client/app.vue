<template>
  <div id="app">
    <div id="cover">
      {{docs}}
    </div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue';
import Todo from './views/todo/todo.vue';
import Footer from './layout/footer.jsx';

export default {
  components: {
    Header,
    Todo,
    Footer,
  },
  data() {
    return {
      text: 'hello',
      docs: Header.__docs,
    };
  },
};
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>

