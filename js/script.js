
let app = new Vue({
  el : '#app',
  data : {
    scrollPosition: null
  },//fine data

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },//fine mounted

  methods : {
    updateScroll () {
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);
    },//updateScroll

    top () {
      document.documentElement.scrollTop = 0;
    }
  }//fine methods
});//fine vue
