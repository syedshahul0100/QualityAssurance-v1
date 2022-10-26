import React, { useState } from 'react';

function Charector(props){
    const [charectorsData, setCharectorsData]=useState([])
    const movieName=props.val;
    console.log("aaa", props.val)

    if(movieName == "bahubali"){
        setCharectorsData([{name:"Prabhas", img:"images/prabhas.jpg",dec:"Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), known mononymously as Prabhas, is an Indian actor who works predominantly in Telugu cinema. One of the highest-paid actors in Indian cinema, Prabhas has featured in Forbes India's Celebrity 100 list three times since 2015 based on his income and popularity. He has received seven Filmfare Awards South nominations and is a recipient of the Nandi Award and the SIIMA Award."},
                             {name:"Anushka", img:"images/anushka.jpg",dec:"Sweety Shetty (born 7 November 1981), known by her stage name Anushka Shetty, is an Indian actress and model who predominantly works in the Telugu and Tamil films. She is the recipient of three Filmfare Awards South, an Andhra Pradesh state Nandi Award, and a Tamil Nadu State Film Award. Having appeared in 47 films, she is one of the highest-paid South Indian actresses and is popularly referred as Lady Superstar of South Indian cinema."},])
    }
    
    if(movieName == "RRR"){
        setCharectorsData([{name:"ramcharan", img:"images/ramcharan.jpg"},
                             {name:"Ntr", img:"images/ntr.jpg"},])
    }
    console.log(charectorsData)

    return(

        <>
     <div class="grid grid-cols-3 gap-4 bg-black mt-1">
{charectorsData.map((n,i) => (
<div class="max-w-sm movieImg rounded overflow-hidden shadow-lg">
  <img class="w-full " src={n.img} alt="Sunset in the mountains" />
  <div class="px-6 py-4 bg-white">
  </div>
</div>
))}
</div>
           
 
         <img src="images/logo.jpg" />
        </>
    )
}

export default Charector;