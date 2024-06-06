// import { useState } from 'react';
import Slider from 'react-slick';
import './styles/testimonial.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <section className='testimony-container'>
         <div className='additional-text-box-aboutUS'>
            <span className='additional-text-aboutUS'>Servicios</span>
         </div>

         <h3 className='subtitle-service'>
            Embellece tu Espacio Exterior con Nuestros Servicios de Jardinería
         </h3>

         <div className='slider-container'>
            <Slider {...settings}>
               <div>
                  <div className='testimony-box'>
                     <div className='stars-box'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                     </div>
                     <p className='paragraph-testimony'>
                        Verdegal transformó mi césped cubierto de maleza en un
                        hermoso oasis. Su atención al detalle y experiencia son
                        incomparables.
                     </p>

                     <div className='customers-box'>
                        <img
                           className='img-customers'
                           src='./user.png'
                           alt='img not found'
                        />
                        <span className='name-customers-testimony'>
                           Aaron Mejia
                        </span>
                        <span className='information-customers-testimony'>
                           Propietario de casa, jardines verdes
                        </span>
                        <img
                           className='img-verdegal-testimony'
                           src='./logo-verdegal.png'
                           alt='img not found'
                        />
                     </div>

                     {/* <div className='circles-box'>
                        <div className='circle-testimony'></div>
                        <div className='circle-testimony circle-black'></div>
                     </div> */}
                  </div>
               </div>
               <div>
                  <div className='testimony-box'>
                     <div className='stars-box'>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                     </div>
                     <p className='paragraph-testimony'>
                        Verdegal transformó mi césped cubierto de maleza en un
                        hermoso oasis. Su atención al detalle y experiencia son
                        incomparables.
                     </p>

                     <div className='customers-box'>
                        <img
                           className='img-customers'
                           src='./user.png'
                           alt='img not found'
                        />
                        <span className='name-customers-testimony'>
                           Aaron Mejia
                        </span>
                        <span className='information-customers-testimony'>
                           Propietario de casa, jardines verdes
                        </span>
                        <img
                           className='img-verdegal-testimony'
                           src='./logo-verdegal.png'
                           alt='img not found'
                        />
                     </div>

                     {/* <div className='circles-box'>
                        <div className='circle-testimony'></div>
                        <div className='circle-testimony circle-black'></div>
                     </div> */}
                  </div>
               </div>
            </Slider>
         </div>
      </section>
   );
};

export default Testimonial;
