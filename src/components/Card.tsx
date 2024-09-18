import React from 'react';
import '../styles/card.css';
import '../styles/index.css';
import '../styles/utility.css';
import Icon from '../assets/icone-award.svg';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={Icon} alt="Icon" className="icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cardData: CardProps[] = [
    {
      title: 'Produto Vencedor 1',
      description: 'Nossa solução inovadora já venceu diversos prêmios.',
    },
    {
      title: 'Produto Vencedor 2',
      description: 'Soluções que se destacam em inovação e praticidade.',
    },
    {
      title: 'Produto Vencedor 3',
      description: 'Reconhecido no mercado por sua eficiência e sucesso.',
    },
  ];

  return (
    <div className="card-group">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="container">
      <div className='flex items-center justify-center'>
        <p style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
          Soluções
        </p>
        <h2 style={{ color: 'var(--text-color)' }}>
          Sob medida para você
        </h2>
        <h3 className="py-base text-center " style={{ fontWeight: 600, color: 'var(--second-text-color)' }}>
          Inovação é com a gente! O <span style={{ color: 'var(--primary-color'}}>Meu Silo</span> já conquistou diversos <br />
          clientes, seja você mais um deles, veja tudo que pode ganhar <br />
          com nossos serviços. 
        </h3>
      </div>
      <CardGrid />
    </div>
  );
}

export default App;
