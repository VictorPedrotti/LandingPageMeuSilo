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
      title: 'Na palma da mão',
      description: 'Nossa solução possibilita o controle do seu silo no seu celular.',
    },
    {
      title: 'Integração com cooperativas',
      description: 'Realize seus pedidos diretamente pelo App, com maior agilidade.',
    },
    {
      title: 'Gestão e alertas',
      description: 'Possibilidade de configuração de acordo com as suas necessidades.',
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
