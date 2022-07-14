app.component('intro-display',{
    template:
    /*html*/
    `<center><div class="intro-image">
        <img v-bind:src="image" style="width:100%, padding:0, margin:0"> <!-- center and fill box-->
        <h1>Crypto Scam Detector<h1>
        <h3>Alerting you of the latest security risks in Web 3.0<h3>
        
       <p> CSD uses the latest information from the internet to inform you of potential and confirmed security breaches detected. We aim to minimize the noise of Web 3.0 by providing only essential information. Find out if there has been a detection of a security breach in the past 6 months relating to your assets in Web 3.0.
        <p>
     </div></center>`,
  data() {
    return {
        image: './assets/images/spotlight.jpg',
    }
}
})