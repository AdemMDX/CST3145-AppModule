let webstore = new Vue({
    el: '#app'
}) //app id


let newwebstore2 = new Vue({
    el: '#app2',
    data: {
        sitename: 'After School Club',
        product: {
            id: 1001,
            title: "Maths",
            description: "London",
            price: "£" + 20,
            image: "https://www.flaticon.com/svg/static/icons/svg/2891/2891382.svg",
            //image2: "image 2 placeholder"
            availableInventory: 10,
            rating: 3,
        },/*
        english: {
            id: 1002,
            title: "English",
            description: "London",
            price: "£" + 15,
            image: "https://www.flaticon.com/svg/static/icons/svg/947/947540.svg",
            //image2: "image 2 placeholder"
            availableInventory: 10,
        },*/
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
        addToCart: function() {
            this.cart.push(this.product.id);
        },
        addToCart2: function() {
            this.cart.push(this.english.id);
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
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },
        canAddToCart: function () {
            return this.product.availableInventory > this.cartItemCount;
        },
        canAddToCart2: function () {
            return this.english.availableInventory > this.cartItemCount;
        },
        canGoToCheckout: function () {
            return 1 <= this.cartItemCount;
        },
        checkName: function () {
            return this.order.firstname == '' || this.order.lastname == '' || this.order.phone == '';
        },
    }//end of computed
})//app2 id