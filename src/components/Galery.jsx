// import { useState } from 'react';
import './styles/galery.css';

const Galery = () => {
   return (
      <section className='testimony-container'>
         <div className='additional-text-box-aboutUS'>
            <span className='additional-text-aboutUS'>Servicios</span>
         </div>

         <h3 className='subtitle-service'>
            Embellece tu Espacio Exterior con Nuestros Servicios de Jardinería
         </h3>

         <div className='testimony-box'>
            <div className='stars-box'>
               <i className='bx bxs-star'></i>
               <i className='bx bxs-star'></i>
               <i className='bx bxs-star'></i>
               <i className='bx bxs-star'></i>
               <i className='bx bxs-star'></i>
            </div>
            <p>
               Verdegal transformó mi césped cubierto de maleza en un hermoso
               oasis. Su atención al detalle y experiencia son incomparables.
            </p>

            <div>
               <img src='./user.png' alt='img not found' />
               <span>Aaron Mejia</span>
               <span>Propietario de casa, jardines verdes</span>
               <img src='./logo-verdegal.png' alt='img not found' />
            </div>

            <div>
               <div></div>
               <div></div>
            </div>
         </div>
      </section>
   );
};

export default Galery;
