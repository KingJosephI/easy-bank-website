import React from 'react';
import './Service.scss';

const Service = ({ icon, title, description }) => {
  return (
    <article className="service">
      <img className="service__icon" src={icon} alt="" />
      <h2 className="service__title">{title}</h2>
      <p className="service__description">{description}</p>
    </article>
  );
};

export default Service;
