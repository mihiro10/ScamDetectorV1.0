app.component('defi-intro',{
    template:
    /*html*/
    `<center><div class="intro-image">
        <img v-bind:src="image" style="width:100%, padding:0, margin:0"> <!-- center and fill box-->
        <h1>DeFi Protocols<h1> <!-- change font to Iceberg -->
        <p style = "font-family:georgia,garamond,serif;font-size:16px;font-style:italic;">The DeFi protocols with security breaches identified in the past 12 months are listed below</p>
     </div></center>`,
  data() {
    return {
        image: './assets/images/Defi_pic.jpg',
    }
}
})