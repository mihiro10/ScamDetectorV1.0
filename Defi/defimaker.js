app.component('defi-maker',{
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
        <div class="text">
        <p>{{&nbsp;}} </p>
        </div> <!-- blank item to match spacing to text above -->

    </div> `,
  data() {
    return {
        name: 'Maker',
        image: './assets/images/Maker.png',
        chain: 'Ethereum',
        security: 'No',
    }
}
})