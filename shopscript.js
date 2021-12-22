console.log("word.exe working");

const app = Vue.createApp({
  
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Custom minecraft farm',
          description: 'Minecraft service',
          quantity: 0,
          thumbnail: "35.0.jpg",
        },
        {
          id: 2,
          name: 'Car Inspection',
          description: 'Car service',
          quantity: 0,
          thumbnail: "car-service-key-features-A-1920x1080_tcm-3151-1323224.jpg",
        },
        {
          id: 3,
          name: 'Custom car design',
          description: 'Car design',
          quantity: 0,
          thumbnail: "f.jpg",
        },
        {
          id: 4,
          name: 'Accounting for your firm',
          description: 'Accouting service',
          quantity: 0,
          thumbnail: "wellman_financial.jpg",
        },
        
      ],
      showCart: false,
    };
  },
  
   computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
    

    methods: {
      updateCart(product, updateType) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            
            break;
          }
        }
      }
    }
  
  
  
  
  });






app.mount("#app");
  