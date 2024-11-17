import '../styles/index.css';
import '../styles/utility.css';
import '../styles/testimonials.css';
import Star from '../assets/starIcon.svg'; 
import StarOuter from '../assets/starOuterIcon.svg';
import ProfileImageOne from '../assets/images/ProfileImageOne.png';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">Conselho de quem conhece</p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
          Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
          comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
        </p>
      </header>
      <section className="carousel">
        <div className="carousel-content">
          <div className="carousel-card">
            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
            <span className="testimony">
              <p>
                Certamente o mercado chinês de elétricos está bombando, só existe
                uma coisa melhor do que isso, contolar a quantidade de ração do seu frango
                na palma da mão.
              </p>
            </span>
            <span className="rating">
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
            </span>
            <span className="names">
              <p>Ellon Ma</p>
              <p>CEO BING CHILLING</p>
            </span>
          </div>
          <div className="carousel-card">
            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
            <span className="testimony">
              <p>
                Certamente o mercado chinês de elétricos está bombando, só existe
                uma coisa melhor do que isso, contolar a quantidade de ração do seu frango
                na palma da mão.
              </p>
            </span>
            <span className="rating">
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
            </span>
            <span className="names">
              <p>Ellon Ma</p>
              <p>CEO BING CHILLING</p>
            </span>
          </div>
          <div className="carousel-card">
            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
            <span className="testimony">
              <p>
                Certamente o mercado chinês de elétricos está bombando, só existe
                uma coisa melhor do que isso, contolar a quantidade de ração do seu frango
                na palma da mão.
              </p>
            </span>
            <span className="rating">
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={Star} alt="ícone estrela" width={22} height={20} />
              <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
            </span>
            <span className="names">
              <p>Ellon Ma</p>
              <p>CEO BING CHILLING</p>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;