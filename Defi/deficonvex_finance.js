app.component('defi-curve_finance',{
    template:
    /*html*/
    `<div class="product-container"> 
        <div class="product-image">
          <img style = "display: block;
          width: 35px;
          margin-left: auto;
          margin-right: auto;" v-bind:src="image">
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
    </div> `,
  data() {
    return {
        name: 'Convex Finance',
        image: './assets/images/Convex_finance.png',
        chain: 'Ethereum',
        security: 'No',
    }
}
})