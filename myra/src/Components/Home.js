import React from 'react';
import NavBar from './NavBar';
import pic1 from '../Asserts/pickel1.png'
import pic2 from '../Asserts/sweets.png'
import pic3 from '../Asserts/snacks.png'
import pic4 from '../Asserts/samosa.png'
import pic5 from '../Asserts/banner2.png'
import MostPopular from './ShowMore';
const Home = () => {
  return (
    <>
      <div className='section section-type'>
      <div className='container'>
           <div className='row mt-5 section-type'>
          <div className='col-3 homepage'><img src={pic1} className='homeImg'></img><p className='foods'>Pickels</p></div>
          <div className='col-3 homepage'><img src={pic2} className='homeImg'></img><p className='foods'>Sweets</p></div>
          <div className='col-3 homepage'><img src={pic3} className='homeImg'></img><p className='foods'>Snacks</p></div>
          <div className='col-3 homepage'><img src={pic4} className='homeImg'></img><p className='foods'>Healthy Snacks</p></div>
      </div>
      </div>
    </div>
      <div className='container'>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 carImg" src={pic5} alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 carImg" src={pic5} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 carImg" src={pic5} alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     </div> 
     <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2>Recently viewed</h2>
        </div>
        <div></div>
      </div>
     </div>
     {/* <div className='container mostView'>
        <div className='row'>
        <div className='col-12'><h2>Most Popular</h2></div>
        </div>
        <div className='row'>
          <div className='col-xl-2 col-md-3 col-sm-6 d-flex'>
              <img src={pic1} className='mostPImg'></img>
              <img src={pic2}  className='mostPImg'></img>
              <img src={pic3}  className='mostPImg'></img>
              <img src={pic4}  className='mostPImg'></img>
              <img src={pic1}  className='mostPImg'></img>
              <img src={pic2}  className='mostPImg'></img>
              <img src={pic3}  className='mostPImg'></img>
              <img src={pic4}  className='mostPImg'></img>
              <img src={pic1}  className='mostPImg'></img>
              <img src={pic2} className='mostPImg'></img>
              <img src={pic3} className='mostPImg'></img>
              <img src={pic4}  className='mostPImg'></img>
          </div>
        </div>
     </div> */}

     <MostPopular/>
    </>
  );
};
export default Home;
