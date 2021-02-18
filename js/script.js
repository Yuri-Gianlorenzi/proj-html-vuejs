
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
    ],
    whatBest : [
      {
        name : 'Transport Cage',
        img : 'img/product-21-400x400.jpg',
        oldPrice : '',
        price : '$25.00'
      },
      {
        name : 'Dog leash',
        img : 'img/product-20-400x400.jpg',
        oldPrice : '',
        price : '$25.00'
      },
      {
        name : 'Animal transport cage',
        img : 'img/product-16-400x400.jpg',
        oldPrice : '$25.00',
        price : '$12.00'
      },
      {
        name : 'Colorful cat leash',
        img : 'img/product-11-400x400.jpg',
        oldPrice : '',
        price : '$12.00'
      }
    ],
    cart : []
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

    },//fine showWhat

    addCart(bestIndex) {
      this.cart.push(this.whatBest[bestIndex]);
      console.log(this.cart);
    }

  }//fine methods
});//fine vue
