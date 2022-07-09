app.component('coin-display',{
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-info">
            <div>
            {{coin}} 
            </div>

             <div class="product-image">
             <img v-bind:src="image">
             </div>

             <div>

        <ul>
          <div
          class="color-circle"
          :style="{ backgroundColor: 'blue' }">

        </ul>
      </div>
    </div>
  </div>`,
  data() {
    return {
        coin: 'Bitcoin',
        cart:0,
        product: 'Socks',
        brand: 'Vue Mastery',
        image: './assets/images/Bitcoin.png',
        inStock: true,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
        ],
        coins: [
            {name: 'Bitcoin', flag: true},
            {name: 'Eethereum', flag: true},
        ],
    }
}
})