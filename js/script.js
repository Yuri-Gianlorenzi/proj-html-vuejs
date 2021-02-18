
let app = new Vue({
  el : '#app',
  data : {
    scrollPosition: null,
    whatSelect : ['Home', 'Shop', 'About', 'Blog','Contact', 'Shop by Brand'],
    indexSelected : '',
    whatSocial : ['fa-facebook-f', 'fa-twitter', 'fa-instagram', 'fa-github']
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
    },//fine top

    showWhat(index) {
      this.indexSelected = index;

    }//fine showWhat

  }//fine methods
});//fine vue
