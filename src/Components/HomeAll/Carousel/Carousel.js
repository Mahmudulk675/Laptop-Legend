import React from 'react';
import repair from '../../../Images/repair.jpg'
import laptop from '../../../Images/burst-kUqqaRjJuw0-unsplash.jpg';
import more from '../../../Images/michal-kubalczyk-WecngmAT-KY-unsplash.jpg'

const Carousel = () => {
    return (
//         <div  id="carouselExampleIndicators" class="carousel slide container w-75" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img style={{height:"75%"}} src={repair} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img style={{height:"75%"}} src={repair} class="d-block h-75" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img style={{height:"75%"}} src={repair} class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>



<section class="mt-5 more-shoes container">
        <h1 class="shoe"></h1>
        <div id="carouselExampleControls" class="carousel slide all-slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-5">
                  <img src={laptop} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-4 hot-trend-text">
                  <h1>Laptop Legend</h1>
                  <p>Best Base Bsest Sound</p>
                  <h3>$300</h3>
                 <button class="btn btn-warning">Bye now</button>
                </div>
                
                  <div class="col-md-3">
                    <div class="d-flex flex-column bd-highlight mb-3">
                      <h3 class="btn btn-light mb-5">Brands</h3>
                      <div class="p-2 bd-highlight btn btn-info btn-lg mb-3">Hp</div>
                      <div class="p-2 bd-highlight btn btn-info btn-lg mb-3">Mac</div>
                      <div class="p-2 bd-highlight btn btn-info btn-lg mb-3">Asus</div>
                    </div>
                  </div>
                
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-5">
                  <img src={repair} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-4 hot-trend-text">
                  <h1>Addidas Sky</h1>
                  <p>Best Base Bsest Sound</p>
                  <h3>$300</h3>
                 <button class="btn btn-warning">Bye now</button>
                </div>
                <div class="col-md-3">
                  <div class="d-flex flex-column bd-highlight mb-3">
                    <h3 class="btn btn-light mb-5">Brands</h3>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Addidas</div>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Puma</div>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Nike</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-5">
                  <img src={more} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-4 hot-trend-text mx-auto">
                  <h1>Nike Air</h1>
                  <p>Best Base Bsest Sound</p>
                  <h3>$300</h3>
                 <button class="btn btn-warning">Bye now</button>
                </div>
                <div class="col-md-3">
                  <div class="d-flex flex-column bd-highlight mb-3">
                    <h3 class="btn btn-light mb-5">Brands</h3>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Addidas</div>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Puma</div>
                    <div class="p-2 bd-highlight btn btn-info mb-3">Nike</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>

      </section>


    );
};

export default Carousel;