import './styles/about.css';

const AboutUs = () => {
   return (
      <section className='aboutUS-container' id='us'>
         <div className='content-box-aboutUS'>
            <div className='box-years-of-experience'>
               <i className='bx bxs-tree icon-tree-aboutUS'></i>
               <span className='span-years-of-experience'>
                  +15 AÑOS DE EXPERIENCIA
               </span>
            </div>

            <h3 className='subtitle-aboutUS'>
               Embellece tu Espacio Exterior con Nuestros Servicios de
               Jardinería
            </h3>
            <p className='paragraph-aboutUs'>
               En Verdegal nos especializamos en brindar servicios de jardinería
               de alta calidad para realzar la belleza y funcionalidad de los
               espacios al aire libre. Con nuestro equipo de profesionales
               experimentados, ofrecemos una amplia gama de
            </p>

            <div className='characteristics-box-aboutUs'>
               <div className='characteristics-aboutUs'>
                  <i className='bx bx-check'></i>
                  <span className='span-characteristics-aboutUs'>
                     En Verdegal nos especializa
                  </span>
               </div>

               <div className='characteristics-aboutUs'>
                  <i className='bx bx-check'></i>
                  <span className='span-characteristics-aboutUs'>
                     En Verdegal nos especializa
                  </span>
               </div>
            </div>
         </div>

         <div className='image-box-aboutUS'>
            <img src='./img-aboutus.gif' alt='img not found' />
         </div>
      </section>
   );
};

export default AboutUs;
