<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    const data = {};
    let temp;
    // const name ='Vue'
    Object.defineProperty(data, "name", {
      // eslint-disable-next-line getter-return
      get() {
        console.log("我被劫持了");
        return temp;
      },
      set(val) {
        temp = val;
        console.log("你试图改变属性");
      }
    });
    console.log(data.name);
    data.name = 1;
    // data.name++
    // data.name++
    // data.name++
    // data.name++
    console.log(data.name);
  },
  mounted() {},
  methods: {}
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*!*text-align: center;*!*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
