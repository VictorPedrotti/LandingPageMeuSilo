import Button from "./Button";
import Check from "../assets/check.svg";
import '../styles/pricing.css';
import '../styles/index.css';
import '../styles/utility.css';

const Pricing = () => {
  return (
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>
      <section className="even-columns gap-1.5">
        <div className="pricing-card">
          <span className="plan">
            <h3>Básico</h3>
            <p>1 mês de experiência para conhecer o aplicativo.</p>
          </span>
          <h2>Grátis</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" /><span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Limite de 3 silos</p>
          </span>
          <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Não acompanha instalação do sensor</p>
          </span>
        </div>
        <div className="pricing-card premium">
          <span className="bonus">
            <p>1º MÊS COM DESCONTO</p>
          </span>
          <span className="plan">
            <h3>Premium</h3>
            <p>Para quem precisa de um controle eficaz na alimentação dos frangos.</p>
          </span>
          <span className="price">
            <h2>R$ 89,90</h2>
            <p>/mês</p>
          </span>
          <Button text="Pedir agora" key="premium" />
          <span className="hr" />
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Silos ilimitados</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Preferência em pedidos</p>
          </span>
          <span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Insights exclusivos</p>
          </span>
        </div>
        <div className="pricing-card">
          <span className="plan">
            <h3>Básico</h3>
            <p>Controle eficaz da sua granja na palma da mão.</p>
          </span>
          <h2>Grátis</h2>
          <Button text="Pedir agora" secondary key="free" />
          <span className="hr" /><span className="features">
            <img src={Check} alt="ícone check" width={24} height={24} />
            <p>Limite de 3 silos</p>
          </span>
          <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Não acompanha instalação do sensor</p>
          </span>
        </div>
      </section>
    </section>
  )
}

export default Pricing
