let webstore = new Vue({
    el: '#app'
}) //app id


let newwebstore2 = new Vue({
    el: '#app2',
    data: {
        sitename: 'After School Club',
        products: products,
        cart: [],
        showProduct: true,
        order: {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            gift: '',
            method: 'home',
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as gift',
            phone: '',
        },
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'nevada',
        },
    },
    methods: {
        addToCart(product) {
            this.cart.push(product.id);
        },
        showCheckout () {
            this.showProduct = this.showProduct ? false : true;
        },
        showSubmit () {
            if(this.order.firstname == '' || this.order.lastname == '' || this.order.phone == '') {
                alert("No Input")
            }
            else {
            alert('Order Submitted!')
            }
        },
        onlyLetter(e) {
            let char = String.fromCharCode(e.keyCode); 
            // Get user input letters
            if(/^[A-Za-z]+$/.test(char)) return true; 
            // check letters
            else e.preventDefault(); 
            // if it isn't letters, dont add
            //prevent it if not
          },
          canAddToCart (product) {
            return product.availableInventory > this.cartCount
            (product.id)
        },
          cartCount(id) {
              let count = 0;
              for(let i=0; i <this.cart.length; i++) {
                  if (this.cart[i] === id) count++;
              }
              return count;
          }
    },
    computed: {
        
        cartItemCount() {
            return this.cart.length;
        },

        /*
        canAddToCart: function () {
            return product.availableInventory > this.cartItemCount;
        },
        
        canAddToCart2: function () {
            return this.english.availableInventory > this.cartItemCount;
        },
        */
       
        canGoToCheckout: function () {
            return 1 <= this.cartItemCount;
        },
        checkName: function () {
            return this.order.firstname == '' || this.order.lastname == '' || this.order.phone == '';
        },
    }//end of computed
})//app2 id