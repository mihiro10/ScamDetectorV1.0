app.component('defi-uniswap',{
    template:
    /*html*/
    `<div class="product-container"> 
    <div class="product-image">
    <img v-bind:src="image">
  </div>
  <div class="text">
  <p>{{name}} </p>
  </div>
  <div class="text">
  <p>{{chain}} </p>
  </div>
  <div class="text">
  <p>{{security}} </p>
  </div>
  <div class="text"> <!-- blank item to match spacing to text above -->
  <p>{{&nbsp;}} </p>
  </div>

    </div> `,
  data() {
    return {
        name: 'Uniswap',
        image: './assets/images/uniswap.png',
        chain: 'Ethereum',
        security: 'No',
    }
}
})