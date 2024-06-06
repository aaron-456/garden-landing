import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Services from './components/Services';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Testimonial from './components/Testimonial';
import ScheduleAppointment from './components/ScheduleAppointment';

function App() {
   return (
      <>
         <Header />
         <Home />
         <AboutUs />
         <Services />
         <Testimonial />
         <ScheduleAppointment />
         <ContactMe />
      </>
   );
}

export default App;
