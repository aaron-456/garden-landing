import '../styles/contactMe.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm('service_jsvrp4j', 'template_xmyepz8', form.current, {
            publicKey: 'BfJ-AZv4sHcWHQsap',
         })
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            },
         );
   };

   return (
      <section className='contactMe-container' id='contactme'>
         <div className='titles-box'>
            <span className='subtitle-aboutUS'>Lorem ipsum dolor sit.</span>
            <h3 className='title-aboutUS'>Contacto y Ubicacion</h3>
         </div>

         <div className='form-and-informationContainer'>
            <form className='form-box' ref={form} onSubmit={sendEmail}>
               <input type='text' name='user_name' placeholder='Nombre' />
               <input
                  type='tel'
                  name='phone'
                  pattern='[0-9]{10}'
                  placeholder='Teléfono'
               ></input>
               <input type='email' name='user_email' placeholder='Email' />
               <input type='text' name='user_affair' placeholder='Asunto' />
               <textarea name='message' placeholder='Message' />
               <input className='btn-form' type='submit' value='Enviar' />
            </form>

            <div className='infomation-contactMe-container'>
               <div className='information-contactMe-box'>
                  <div className='icon-box phone-icon-box'>
                     <i className='bx bx-phone'></i>
                  </div>
                  <div className='text-general-box'>
                     <h4 className='title-general-information-contactMe'>
                        Informacion de Contacto
                     </h4>
                     <span className='span-general-information-contactMe'>
                        +54 9 2267402911
                     </span>
                     <span className='span-general-information-contactMe'>
                        innovacionsolarperu@gmail.com
                     </span>
                  </div>
               </div>

               <div className='information-contactMe-box'>
                  <div className='icon-box location-icon-box'>
                     <i className='fa-solid fa-location-crosshairs'></i>
                  </div>
                  <div className='text-general-box'>
                     <h4 className='title-general-information-contactMe'>
                        Ubicacion - Quito
                     </h4>
                     <span className='span-general-information-contactMe'>
                        Cercado de Lima, Jr Cuzco 389
                     </span>
                     <span className='span-general-information-contactMe'>
                        Jr Sao Paulo 1768, San Martin de Porres, Lima.
                     </span>
                  </div>
               </div>

               <div className='information-contactMe-box'>
                  <div className='icon-box social-icon-box'>
                     <i className='bx bxl-instagram'></i>
                  </div>
                  <div className='text-general-box'>
                     <h4 className='title-general-information-contactMe'>
                        Redes Sociales
                     </h4>
                     <span className='span-general-information-contactMe'>
                        Instagram
                     </span>
                     <span className='span-general-information-contactMe'>
                        Facebook
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <iframe
            id='miId'
            title='Google Maps'
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1410.611426454725!2d-78.49145668967321!3d-0.10499660351837069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1707458760690!5m2!1ses!2sec'
            width='100%'
            height='250'
            style={{
               border: 0,
               borderRadius: '6px',
               padding: '18px',
               backgroundColor: '#D1D5DB',
               marginBottom: '4.5em',
            }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
         ></iframe>
      </section>
   );
};

export default ContactMe;
