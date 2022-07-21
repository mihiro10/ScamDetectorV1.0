app.component('defi-intro',{
    template:
    /*html*/
    `<center><div class="intro-image">
        <img v-bind:src="image" style="width:100%, padding:0, margin:0"> <!-- center and fill box-->
        <h1>DeFi Protocols<h1> <!-- change font to Iceberg -->
        <div class="white-line"></div>
        <p>The DeFi protocols with security breaches identified in the past 12 months are listed below</p>
        <div class="white-line"></div>
        <p>TICKER SYMBOL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;NAME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;CHAIN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SECURITY BREACH: Y/N?</p>
        <div class="s-white-line"></div>
    </div></center>`,
     

  data() {
    return {
        image: './assets/images/Defi_pic.jpg',
    }
}
})