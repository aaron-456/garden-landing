import './styles/aboutUS.css';

const AboutUs = () => {
   return (
      <section className='aboutUS-container' id='us'>
         <div className='aboutUS-box'>
            <span className='subtitle-aboutUS'>Lorem ipsum dolor sit.</span>
            <h3 className='title-aboutUS'>Nosotros</h3>
            <p className='content-aboutUs'>
               Ofrecemos atención urgente para aquellas situaciones en las que
               nuestros clientes necesitan un producto específico de manera
               inmediata y contamos con un equipo de expertos en ortopedia que
               estarán disponibles para asesorar y responder cualquier pregunta
               que pueda tener. Además, ofrecemos servicios de envío a domicilio
               y coordinación de entregas en nuestro local las 24 horas del día.
               /n/n/ Nuestra prioridad es satisfacer las necesidades de nuestros
               clientes con la mejor calidad de servicio y productos ortopédicos
               de primera línea.
            </p>
         </div>
         <div className='img-aboutUs-box'>
            <img
               className='img-aboutUs'
               src='1366_2000.jpg'
               alt='img not found'
            />
         </div>
      </section>
   );
};

export default AboutUs;
