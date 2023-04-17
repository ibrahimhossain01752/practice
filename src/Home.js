import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-1_2000x.jpg?v=1572581662" alt="Image 1"/>
      <div class="carousel-caption heading-1">
      <h5 class="para1" >Best Offers On</h5>
             <h1 class="beauti-title"><span class="colec1">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-2_bd13fd4a-b427-4949-8025-288b3a744835_2000x.jpg?v=1572581683" alt="Image 2"/>
      <div class="carousel-caption slide_2">
      <h5 class="para3 mt-5"><span class="span2">Cosmetics For Young</span></h5>
             <h1 class="beauti-title para4 mb-5"><span class="colec2">Senstive Skin</span> <span class="colec"></span></h1>
             <h5 class="para-3">50% Discount</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-3-1_2000x.jpg?v=1572863329" alt="Image 3"/>
      <div class="carousel-caption slide_2">
      <h5 class="para3 mt-5"><span class="span3">Best Collections</span></h5>
          <h1 class="beauti-title para4 mb-5"><span class="colec1">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para-3">flat 30% </h5>
      </div>
    </div>
  </div>

  {/* <!-- Controls --> */}
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>


    </div>
  );
};

export default Home;