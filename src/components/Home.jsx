import './styles/home.css';
const Home = () => {
   return (
      <section className='home-container ' id='home'>
         <div className='content-box-home'>
            <h1 className='title-home slide-in-left'>
               Embellece tu Espacio Exterior con Nuestros Servicios de
               Jardinería
            </h1>
            <h3 className='subtitle-home slide-in-left'>
               En Verdegal ofrecemos una amplia gama de servicios de jardinería
               para que su espacio exterior luzca hermoso. Desde cortar el
               césped hasta el paisajismo, nuestro equipo de profesionales se
               dedica a brindar un servicio de primer nivel y crear jardines
               impresionantes.
            </h3>
            <div className='buttons-home-box'>
               <button className='btn-schedule-appointment slide-in-left'>
                  AGENDAR CITA
               </button>
               <button className='btn-whatsapp-home'>
                  <i className='fa-brands fa-whatsapp'></i>
                  <span className='span-whatsapp-home'>Whatsapp</span>
               </button>
            </div>
         </div>
         <div className='image-box-home'>
            <img src='./img-home.gif' alt='img not foud' />
         </div>
      </section>
   );
};

export default Home;
