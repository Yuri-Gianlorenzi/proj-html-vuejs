
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
    testimonials : [
      {
        name : 'Lisa Smith',
        img : 'img/avatar-1-200x200.jpg',
        message : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        from : 'Delaware'
      },
      {
        name : 'Marta Rossi',
        img : 'img/avatar-3-200x200.jpg',
        message : 'Belli i guinzagli, riesco a metcharli tutti con i miei outfit',
        from : 'Borgo A Buggiano'
      },
      {
        name : 'Giorgio Lafayette',
        img : 'img/avatar-4-200x200.jpg',
        message : 'Il cibo è davvero ottimo, il mio cane è veramente contento, a tal punto che si mangia anche i croccantini del gatto',
        from : 'Parigi'
      },
    ],
    cart : [],
    userMail : '',
    userData : [
      {
        name : '',
        surname : '',
        mail : ''
      }
    ]
  },//fine data

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    console.log(this.userMail);
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
    },//addCart

    addMail() {
      this.userData[0].mail = this.userMail;
      console.log(this.userData);
      this.userMail = '';
    },//fine addMail

    clickAddMail () {addMail()}//fine clickAddMail

  }//fine methods
});//fine vue
