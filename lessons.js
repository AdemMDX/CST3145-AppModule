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
                image: "https://logos.textgiraffe.com/logos/logo-name/Maths-designstyle-birthday-m.png",
                //image2: "image 2 placeholder"
                availableInventory: 5
            },
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
            showCheckout () {
                this.showProduct = this.showProduct ? false : true;
            },
            showSubmit () {
                alert('Order Submitted!')
            },
        },
        computed: {
            cartItemCount: function() {
                return this.cart.length || '';
            },
            canAddToCart: function () {
                return this.product.availableInventory > this.cartItemCount;
            }
        }//end of computed
    })//app2 id