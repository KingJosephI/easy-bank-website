import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Service.scss';

const Service = ({ icon, title, description }) => {
  return (
    <article className="service">
      <StaticImage className="service__icon" src={icon} alt="image" />
      <h2 className="service__title">{title}</h2>
      <p className="service__description">{description}</p>
    </article>
  );
};

export default Service;
