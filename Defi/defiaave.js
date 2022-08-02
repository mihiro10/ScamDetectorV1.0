app.component('defi-aave',{
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
        name: 'Aave',
        image: './assets/images/Aave.png',
        chain: 'Multichain',
        security: 'No',
    }
}
})