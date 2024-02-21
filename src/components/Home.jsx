import './styles/home.css';
const Home = () => {
   return (
      <section className='home-container ' id='home'>
         <div className='elements-box kenburns-top'>
            <div className='background-image'></div>
            <div className='content-box'>
               <h1 className='title-home slide-in-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
               </h1>
               <h3 className='subtitle-home slide-in-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, neque.
               </h3>
               <button className='button-whatsapp slide-in-left'>
                  <span className='span-whatsapp'>Whatsapp</span>
                  <i className='fa-brands fa-whatsapp'></i>
               </button>
            </div>
         </div>
      </section>
   );
};

export default Home;
