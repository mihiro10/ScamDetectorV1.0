app.component('coin-display',{
    template:
    /*html*/
    `<div><img v-bind:src="image">
    </div>
    <div class="product-display">
        <div class="product-container">
             <div class="product-image">
                <img v-bind:src="image">
             </div>
        <div class="product-info">
            <h1>{{coin}}</h1>
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
        image: './assets/images/Maker.png',
    }
}
})