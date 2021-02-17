
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
    }
  }//fine methods
});//fine vue
