
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
      document.documentElement.scrollTo(0, 0);
    }//fine top
  }//fine methods
});//fine vue
