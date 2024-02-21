import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Services from './components/Services';
import Home from './components/Home';
import Galery from './components/Galery';
import ContactMe from './components/ContactMe';

function App() {
   return (
      <>
         <Header />
         <Home />
         <AboutUs />
         <Services />
         <Galery />
         <ContactMe />
      </>
   );
}

export default App;
