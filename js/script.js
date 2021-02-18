
let app = new Vue({
  el : '#app',
  data : {
    scrollPosition: null,
    whatSelect : ['Home', 'Shop', 'About', 'Blog','Contact', 'Shop by Brand'],
    indexSelected : '',
    whatSocial : ['fa-facebook-f', 'fa-twitter', 'fa-instagram', 'fa-github'],
    whatCategory : [
      {
        name : 'Bed',
        img : 'img/cuccia300.jpg'
      },
      {
        name : 'Food',
        img : 'img/osso300.jpg'
      },
      {
        name : 'Toys',
        img : 'img/palline300.jpg'
      },
      {
        name : 'Transport',
        img : 'img/borsa300.jpg'
      }
    ],
    whatKibble : [
      {
        name : 'Kibble 1',
        img : 'img/food-transparent-18-200x210.png'
      },
      {
        name : 'Kibble 2',
        img : 'img/food-transparent-17-200x210.png'
      },
      {
        name : 'Kibble 3',
        img : 'img/food-transparent-16-200x210.png'
      }
    ]
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
