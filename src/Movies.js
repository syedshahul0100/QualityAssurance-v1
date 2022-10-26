import React, { useEffect } from 'react';
import {useState} from 'react';
import Body from './Body';
import { useParams } from 'react-router-dom';
import {BrowserRouter, Link, Routes, Router} from 'react-router-dom';
import Charector from './Charector.js';


function Movies(props){
    const[input, setInput]=useState("");
    const[condition, setCondition]=useState(true);
    const[condition2, setCondition2]=useState(false);

    const[data, setData]=useState();
    let [charectorsData, setCharectorsData]=useState([])
  //let {name} = useParams()
    const [moviesData, setMoviesData]=useState([ 
    {name:"bahubali", img:"bahubali.jpg"},
    {name:"RRR", img:"rrr.jpg"},
    {name:"Pushpa", img:"pushpa.jpg"},
    {name:"Major", img:"major.jpg"},
    {name:"Sitaramam", img:"sitaramam.jpg"},
    {name:"Love Story", img:"lovestory.jpg"},]);

const searchhandler1=(e)=>{
  console.log(e.target.value)
   for(var s of moviesData){    
    if(s.name == e.target.value){
      setMoviesData([s])
    }
   }
}

const resetHandler =()=>{
  setInput("")
  setMoviesData([
    {name:"bahubali", img:"bahubali.jpg"},
    {name:"RRR", img:"rrr.jpg"},
    {name:"Pushpa", img:"pushpa.jpg"},
    {name:"Major", img:"major.jpg"},
    {name:"Sitaramam", img:"sitaramam.jpg"},
    {name:"Love Story", img:"lovestory.jpg"},
])
}
 
const inputClick=(e)=>{
  setInput(e.target.value);
  }
const HomeClick=(e)=>{
    setCondition(false)
    setCondition2(true)
    setData(e.target.value)
    console.log(e.target.value)
    charectorsData=[];
    if(e.target.value == "bahubali"){
      setCharectorsData([{name:"Prabhas", img:"images/prabhas.jpg",dec:"Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), known mononymously as Prabhas, is an Indian actor who works predominantly in Telugu cinema. One of the highest-paid actors in Indian cinema, Prabhas has featured in Forbes India's Celebrity 100 list three times since 2015 based on his income and popularity. He has received seven Filmfare Awards South nominations and is a recipient of the Nandi Award and the SIIMA Award."},
                           {name:"Anushka", img:"images/anushka.jpg",dec:"Sweety Shetty (born 7 November 1981), known by her stage name Anushka Shetty, is an Indian actress and model who predominantly works in the Telugu and Tamil films. She is the recipient of three Filmfare Awards South, an Andhra Pradesh state Nandi Award, and a Tamil Nadu State Film Award. Having appeared in 47 films, she is one of the highest-paid South Indian actresses and is popularly referred as Lady Superstar of South Indian cinema."},])
  }
  
  if(e.target.value == "RRR"){
    setCharectorsData([{name:"ramcharan", img:"images/ramcharan.jpg",dec:"Konidela Ram Charan Teja (born 27 March 1985) is an Indian actor, producer, and entrepreneur who works predominantly in Telugu cinema. One of the highest-paid Telugu film actors, he is the recipient of three Filmfare Awards and two Nandi Awards. Since 2013, he has featured in Forbes India's Celebrity 100 list."},
                           {name:"Ntr", img:"images/ntr.jpg", dec:"Nandamuri Taraka Rama Rao Jr. (born 20 May 1983), also known as Jr. NTR or Tarak, is an Indian actor, dancer, and television presenter who primarily works in Telugu cinema. One of the highest paid Telugu film actors, Rama Rao Jr. has won several accolades, including two Filmfare Awards, two state Nandi Awards, and four CineMAA Awards. Since 2012, he has featured in Forbes India Celebrity 100 list."},])
  }

  if(e.target.value == "Pushpa"){
    setCharectorsData([{name:"Allu Arjun", img:"images/alluarjun.jpg",dec:"Allu Arjun made his debut with Gangotri in 2003. He rose to prominence starring in Sukumar's cult classic Arya (2004), for which he earned a Nandi Special Jury Award. He consolidated his reputation with the action films Bunny (2005) and Desamuduru (2007). In 2008, he starred in the romantic drama Parugu, for which he won his first Filmfare Award for Best Actor – Telugu."},
                           {name:"Rashmika", img:"images/rasmika.jpg", dec:"Rashmika Mandanna (born 5 April 1996) is an Indian actress who works predominantly in Telugu and Kannada films. She is a recipient of a Filmfare Award South and a SIIMA Award. She made her acting debut with 2016 Kannada film Kirik Party, and Telugu debut with Chalo (2018), and in Tamil with Sulthan (2021). She is also set to make her Hindi debut with the film Goodbye"},])
  }

  
  if(e.target.value == "Major"){
    setCharectorsData([{name:"Adivi Sesh", img:"images/major.jpg",dec:"Adivi Sesh Sunny Chandra (born 17 December 1984) is an Indian actor, director and screenwriter who primarily works in Telugu-language films. Sesh was born in Hyderabad and was raised in Berkeley, California. He made his film debut as a lead actor and director in 2010 with Karma. Following antagonistic roles in Panjaa (2011), Balupu (2013), and Baahubali: The Beginning (2015)"},
                           {name:"Rashmika", img:"images/majorHeroin.jpg", dec:"Saiee Manjrekar (born 23 December 1997) is an Indian actress who works in Hindi and Telugu-language films. The daughter of actors Mahesh Manjrekar and Medha Manjrekar, she debuted in 2019 with action-romantic film Dabangg 3 for which she receiving a nomination for Best Female Debut at the Filmfare Awards."},])
  }

  
  if(e.target.value == "Sitaramam"){
    setCharectorsData([{name:"Dulquer Salmaan", img:"images/ramu.jpg",dec:"Dulquer Salmaan (born 28 July 1986), also known as DQ, is an Indian actor, playback singer and film producer who predominantly works in Malayalam films in addition to Tamil, Hindi and Telugu language films. He graduated with a bachelor's degree in business management from Purdue University and worked as a business manager in Dubai before pursuing a career in acting. He is a recipient of four Filmfare Awards South and one Kerala State Film Award."},
                           {name:"Mrunal Thakur", img:"images/sita.jpg", dec:"Mrunal Thakur (born 1 August, 1992), is an Indian actress who predominantly works in Hindi cinema.[2] She began her acting career with the television soaps Mujhse Kuchh Kehti...Yeh Khamoshiyaan (2012) and Kumkum Bhagya (2014–2016). Thakur made her Hindi film debut with Love Sonia (2018)."},])
  }

  
  if(e.target.value == "Love Story"){
    setCharectorsData([{name:"Akkineni Naga Chaitanya", img:"images/nagachaitanya.jpg",dec:"Akkineni Naga Chaitanya (born 23 November 1986) is an Indian actor who primarily works in Telugu cinema. He made his acting debut with Josh (2009) and his breakthrough came with Gautham Vasudev Menon-directed Ye Maaya Chesave (2010). He has won several film awards including Filmfare Award for Best Male Debut – South, Nandi Award for Best Supporting Actor and SIIMA Award for Best Actor (Critics)."},
                           {name:"Sai Pallavi Senthamarai", img:"images/saipallavi", dec:"Sai Pallavi Senthamarai (born 9 May 1992) is an Indian actress and dancer who works in Telugu, Tamil and Malayalam films. She is a recipient of several awards including two Filmfare Awards for her performances in the films Premam (2015) and Fidaa (2017). She was recognized by Forbes magazine as one of India's 30 under 30 in 2020.Her successful films include Middle Class Abbayi (2017), Maari 2 (2018), Love Story (2021) and Shyam Singha Roy (2021)."},])
  }
  console.log(charectorsData)
}


const back=()=>{
  setCondition(true)
  setCondition2(false)
}
    return(
        <>
      {condition && <div>

      <div className='navSearchBtn'>
        <input type="text" placeholder="Enter Movie Name" class="block p-3 w-80 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={input} onChange={inputClick} />
        <button value={input} onClick={searchhandler1} class=" hover:bg-slate-100 text-black font-bold py-2 px-4 searchBtn rounded-full">
        Search
        </button>

        <button onClick={resetHandler} class=" hover:bg-slate-100 text-black font-bold py-2 px-4 resetBtn rounded-full">
        Reset
        </button>
      </div>

  <div class="grid grid-cols-3 gap-4 bg-black mt-1">
{moviesData.map((n,i) => (
<div key={i} class="max-w-sm movieImg rounded overflow-hidden shadow-lg">
  <img class="w-full " src={n.img} alt="Sunset in the mountains" />
  <div class="px-6 py-4 bg-white">
    <button type='button' value={n.name} onClick={HomeClick} class="font-bold text-xl mb-2">{n.name}</button>
  </div>
</div>
))}
</div>
</div> }

{/* <div className='charectorCard'>
    <div className='charectorImg'>
      <img style={{borderRadius:10}} src="images/prabhas.jpg" />
    </div>

   <div className='charectorP'>
<p>Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), known mononymously as Prabhas, is an Indian actor who works predominantly in Telugu cinema. One of the highest-paid actors in Indian cinema, Prabhas has featured in Forbes India's Celebrity 100 list three times since 2015 based on his income and popularity. He has received seven Filmfare Awards South nominations and is a recipient of the Nandi Award and the SIIMA Award.</p>
    </div>
  </div> */}


 {condition2 && <div className='bg-black pt-9'>
{charectorsData.map((val) => (
<div class="flex mt-8 ml-2 ">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={val.img} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{val.name}</h5>
      <p class="text-gray-700 text-base mb-4">{val.dec}</p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div> 
))}


<button onClick={back} class=" mt-6 ml-96 mb-9 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Back
</button>
</div>}

 </>
    )
}

export default Movies;