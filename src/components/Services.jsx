import './styles/services.css';

const Services = () => {
   return (
      <section className='service-container' id='services'>
         <div className='additional-text-box-aboutUS'>
            <span className='additional-text-aboutUS'>Servicios</span>
         </div>

         <h3 className='subtitle-service'>
            Embellece tu Espacio Exterior con Nuestros Servicios de Jardinería
         </h3>
         <p className='paragraph-service'>
            En Verdegal nos especializamos en brindar servicios de jardinería de
            alta calidad para realzar la belleza y funcionalidad de los espacios
            al aire libre. Con nuestro equipo de profesionales experimentados,
            ofrecemos una amplia gama de
         </p>

         <div className='information-general-box'>
            <div className='information-service-box'>
               <div className='characteristics-information-box'>
                  <h5 className='title-information-service'>
                     Servicios de instalación y mantenimiento de césped
                  </h5>
                  <p className='paragraph-information-service'>
                     Desde la instalación hasta el manteni regular, nos
                     aseguramos de que su césped se mantenga saludable y
                     vibrante.
                  </p>

                  <div className='more-information-service-box'>
                     <p className='more-information-service'>Mas informacion</p>
                     <i className='bx bx-chevron-right icon-rigth'></i>
                  </div>
               </div>

               <img
                  className='img-service'
                  src='/imgServices.jpg'
                  alt='img not foud'
               />
            </div>

            <div className='information-service-box-little'>
               <div className='icons-service-box'>
                  <i className='bx bx-cut icon-scissors'></i>
               </div>
               <h5 className='title-information-service title-information-little'>
                  Servicios de instalación y mantenimiento de césped
               </h5>
               <p className='paragraph-information-service'>
                  Desde la instalación hasta el manteni regular, nos aseguramos
                  de que su césped se mantenga saludable y vibrante.
               </p>

               <div className='more-information-service-box'>
                  <p className='more-information-service'>Mas informacion</p>
                  <i className='bx bx-chevron-right icon-rigth'></i>
               </div>
            </div>

            <div className='information-service-box-little'>
               <div className='icons-service-box'>
                  <i className='fa-solid fa-bug icon-insect'></i>
               </div>
               <h5 className='title-information-service title-information-little'>
                  Servicios de instalación y mantenimiento de césped
               </h5>
               <p className='paragraph-information-service'>
                  Desde la instalación hasta el manteni regular, nos aseguramos
                  de que su césped se mantenga saludable y vibrante.
               </p>

               <div className='more-information-service-box'>
                  <p className='more-information-service'>Mas informacion</p>
                  <i className='bx bx-chevron-right icon-rigth'></i>
               </div>
            </div>

            <div className='information-service-box'>
               <img
                  className='img-service'
                  src='/imgServices.jpg'
                  alt='img not foud'
               />
               <div className='characteristics-information-box'>
                  <h5 className='title-information-service title-information-little'>
                     Servicios de instalación y mantenimiento de césped
                  </h5>
                  <p className='paragraph-information-service'>
                     Desde la instalación hasta el manteni regular, nos
                     aseguramos de que su césped se mantenga saludable y
                     vibrante.
                  </p>

                  <div className='more-information-service-box'>
                     <p className='more-information-service'>Mas informacion</p>
                     <i className='bx bx-chevron-right icon-rigth'></i>
                  </div>
               </div>
            </div>

            <div className='information-service-box'>
               <div className='characteristics-information-box'>
                  <h5 className='title-information-service'>
                     Servicios de instalación y mantenimiento de césped
                  </h5>
                  <p className='paragraph-information-service'>
                     Desde la instalación hasta el manteni regular, nos
                     aseguramos de que su césped se mantenga saludable y
                     vibrante.
                  </p>

                  <div className='more-information-service-box'>
                     <p className='more-information-service'>Mas informacion</p>
                     <i className='bx bx-chevron-right icon-rigth'></i>
                  </div>
               </div>

               <img
                  className='img-service'
                  src='/imgServices.jpg'
                  alt='img not foud'
               />
            </div>
         </div>
      </section>
   );
};

export default Services;
