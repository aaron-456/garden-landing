import { useState, useEffect } from 'react';
import './styles/header.css';

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleChangeOpen = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      const handleResize = () => {
         // Cierra el menú en dispositivos más grandes
         setIsOpen(window.innerWidth <= 850);
      };

      // Agrega el event listener para manejar cambios de tamaño de ventana
      window.addEventListener('resize', handleResize);

      // Limpia el event listener cuando el componente se desmonta
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   //funcion para dirijir a cada seccion de la pagina al usuario
   const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      console.log(`Desplazándose a la sección: ${sectionId}`);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
         handleChangeOpen();
      }
   };

   return (
      <header className='header-container'>
         <div className='img-box'>
            <img className='img-logo' src='logo-verdegal.PNG' alt='' />
         </div>

         <div className='menu-icon-box' onClick={handleChangeOpen}>
            <i className='fa-solid fa-bars'></i>
         </div>
         <div className={`main-tutu ${isOpen ? 'visible-na' : ''}`}>
            <nav className={`main-nav ${isOpen ? 'visible-nav' : ''}`}>
               <div className='logo-and-icon-box'>
                  <img
                     className='img-logo-visible'
                     src='logo-verdegal.PNG'
                     alt=''
                  />
                  <div className='close-icon-box' onClick={handleChangeOpen}>
                     <i className='bx bx-x icon-close'></i>
                  </div>
               </div>

               <hr className='hr-visible-nav' />
               <ul className='nav-list'>
                  <li
                     className='nav-item'
                     onClick={() => scrollToSection('home')}
                  >
                     Inicio
                  </li>
                  <li
                     className='nav-item'
                     onClick={() => scrollToSection('us')}
                  >
                     Nosotros
                  </li>
                  <li
                     className='nav-item'
                     onClick={() => scrollToSection('services')}
                  >
                     Servicios
                  </li>
                  <li
                     className='nav-item item-contact'
                     onClick={() => scrollToSection('contactme')}
                  >
                     Contacto
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
