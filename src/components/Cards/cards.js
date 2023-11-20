// src/components/Cards/Cards.js
import React from 'react';
import './cards.css';

const Card = ({ style, children }) => <div className="card" style={style}>{children}</div>;
const CardImage = ({ orientation, src }) => <img className={`card-image ${orientation}`} src={src} alt="Card" />;
const CardBody = ({ children }) => <div className="card-body">{children}</div>;
const CardTitle = ({ children }) => <h5 className="card-title">{children}</h5>;
const CardText = ({ children }) => <p className="card-text">{children}</p>;
const Button = ({ href, children }) => <a className="card-button" href={href}>{children}</a>;

// Update Cards to accept a projects array
const Cards = ({ projects }) => {
  return (
    <div className="cards">
      {projects.map((project, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <CardImage orientation="top" src={project.image} />
          <CardBody>
            <CardTitle>{project.title}</CardTitle>
            <CardText>{project.description}</CardText>
            <Button href={project.link}>Go somewhere</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
