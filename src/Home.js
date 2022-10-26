import React from "react";


function Home(){

    return(
        <>
<div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel" >
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4" >
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full h-96">
      <img 
        src="homeImg3.jpeg"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full h-96">
      <img 
        src="homeImg2.jpg"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full h-96">
      <img
        src="homeImg1.jpg"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="hometext">
<h1 className="abc">
  <span className="bahubali">Movies</span>
  <br></br>
<span>A movie or film is a type of</span>
<span>visual art that uses images and sounds to tell stories or teach people </span>
<span> something. </span>
<span> Most people watch movies to entertain</span>
<span>themselves or to have fun. Some movies can </span>
<span> make people laugh,</span>
<span> but other movies can make</span>
<span> them cry, or make them feel afraid. Most movies</span>
<span> are made so they can</span>
<span>be watched at home or on a</span>
<span> movie screen at movie theaters. Movies are </span> 
<span>shown in movie theaters</span>
<span>a few weeks or months after</span>
<span> or before the film released.</span>

</h1>
</div>
        </>
    )
}

export default Home;