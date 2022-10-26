import React from "react";


const Contactus=()=>{
    return(
      <>
      <div>
        <img className="contactImg" src="getintuch.jpg" alt="getintuch" />

        <h1 className="contactText">Get In Tuch WithUs</h1>
        <h4 className="contactSubText">Wnat to get in tuch? We'd love to hear from you. Here's how you can reach us...</h4>
      <div className="contactBottomBgColor">

      <div class=" contactCard max-w-sm rounded overflow-hidden shadow-lg ml-32 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">About us</div>
    <p class="text-gray-700 text-base">
    Fan Wikki page helps to get information about all kind of movies with easy way</p>
    <br></br>
    
    <h2><label>Phone no: </label> +91-8501042685</h2>
  </div>
</div>


<div class=" contactCard2 max-w-sm rounded overflow-hidden shadow-lg ml-32 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"> Contact Customer Support</div>
    <p class="text-gray-700 text-base">
Sometimes you need a little help from your friends. Or a HubSpot support rep. Don't worry... we're here for you  
</p>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  contact us
</button>
  </div>
</div>

      </div>
      </div>
      </>
    )
}

export default Contactus;