import '../styles/footer.css';
import '../styles/index.css';
import '../styles/utility.css';
import Instagram from '../assets/icon-instagram.svg';
import Facebook from '../assets/icon-facebook.svg';
import Youtube from '../assets/icon-youtube.svg';
import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt='Logo' width={200} height={80}/>
          <div className="social-icons">
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Youtube} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Faça parte do time</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Funcionalidades</h4>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Análise de dados</a></li>
            <li><a href="#">Boot Discord</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#">iOS & Android</a></li>
            <li><a href="#">Teste a Demo</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Feito com amor na aula de Programação Web 💙</p>
        <p>©2024 AktieTech - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;