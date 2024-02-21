import { useState } from 'react';
import './styles/galery.css';
import FsLightbox from 'fslightbox-react';

const Galery = () => {
   const [toggler, setToggler] = useState(false);
   const [slide, setSlide] = useState(1);
   const images = [
      '/jardineria.jpg',
      '/ssasassss.jpg',
      '/jardineria.jpg',
      '/ssasassss.jpg',
      '/jardineria.jpg',
      '/ssasassss.jpg',
      '/jardineria.jpg',
   ];

   return (
      <section className='galery-container'>
         <div className='titles-box'>
            <span className='subtitle-aboutUS'>Lorem ipsum dolor sit.</span>
            <h3 className='title-aboutUS'>Galeria</h3>
         </div>

         <FsLightbox toggler={toggler} sources={images} slide={slide} />

         <div className='images-box'>
            {images.map((image, index) => (
               <img
                  key={index}
                  src={image}
                  alt='img not found'
                  onClick={() => {
                     setSlide(index + 1);
                     setToggler(!toggler);
                  }}
                  className={
                     index === 0
                        ? 'first-image'
                        : index === 1
                          ? 'second-image'
                          : ''
                  }
               />
            ))}
         </div>
      </section>
   );
};

export default Galery;
