import type { Metadata } from 'next';
import Trabajos from '../DB/trabajos.js';
import styles from './portfolioPage.module.css';
import Hero from '../components/hero.jsx';
import Card from '../components/card.jsx'


export const metadata: Metadata = {
  title: "Portafolio Two Shot Films",
  description: "Desde cobertura de eventos hasta videos corporativos, ofrecemos soluciones profesionales para tus necesidades.",
};

const PortfolioPage = () => {
  return (
    <>
      <Hero 
        Imagen = "images/Instinto_Thumnail.jpg"
        Titulo = 'Portafolio'
        SubTitulo= 'Nuestros trabajos más destacados'
      />
      <section className={styles.portfolio}>
        <div className={styles.portfolioGrid}>
          {Trabajos.map((trabajo, index) => (
            <Card vinculo={'/portfolio/' + trabajo.vinculo} 
            titulo={trabajo.Titulo} 
            cuerpo={trabajo.SubTitulo} 
            imagen={trabajo.Thumnail}/>
          ))}
        </div>
      </section>
      
    </>
  );
};

export default PortfolioPage;