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
            sort: 'Normal',
            zip: '',
            gift: '',
            method: 'home',
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as gift',
            phone: '',
        },
        sort: {
            Normal: 'Normal',
            Price: 'Price',
            Alphabetically: 'Alphabetically',
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
          },
          removeProduct (product){
            this.cart.splice(product.id);
        },
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
        sortedProducts() {
            //comparison

            if (this.order.sort === 'Price') {
                function compare(a, b) {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0;
                }
                return this.products.sort(compare);
            }
            else if (this.order.sort === 'Normal') {
                function compare(a, b) {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                }
                return this.products.sort(compare);
            }
            else if (this.order.sort === 'Alphabetically'){
                    function compare(a, b) {				//#B
                      if(a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                      if(a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                      return 0;
                    }
                    return this.products.sort(compare);		       //#C
            }
            else {
                return true;
            }
        },
        testFunction () {
            if (this.cart == 'Price') {
                return true;
            }
            else {
                return false;
            }
        },
    }//end of computed
})//app2 id