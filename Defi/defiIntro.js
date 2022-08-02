app.component('defi-intro',{
    template:
    /*html*/
    `<center><div class="intro-image">
        <img v-bind:src="image" style="width:100%, padding:0, margin:0"> <!-- center and fill box-->
        <h1>DeFi Protocols<h1> <!-- change font to Iceberg -->
        <div class="white-line"></div>
        <p>The DeFi protocols with security breaches identified in the past 12 months are listed below</p>
        <div class="white-line"></div>
        <div class="product-container"> 
            <div class="text">
            <p>{{column1}} </p>
            </div>
            <div class="text">
            <p>{{column2}} </p>
            </div>
            <div class="text">
            <p>{{column3}} </p>
            </div>
            <div class="text">
            <p>{{column4}} </p>
            </div>
        </div>
        <div class="s-white-line"></div>
        <defi-maker></defi-maker>
        <defi-uniswap></defi-uniswap>
        <defi-aave></defi-aave>
        <defi-curve_finance></defi-curve_finance>
    </div></center>`,
     

  data() {
    return {
        image: './assets/images/Defi_pic.jpg',
        column1: 'TICKER SYMBOL',
        column2: 'NAME',
        column3: 'CHAIN',
        column4: 'BREACH DETECTED?'
    }
}
})