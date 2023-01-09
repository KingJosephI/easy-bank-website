import React from 'react';
import './ArticleCard.scss';

const ArticleCard = ({
  image = '',
  author = '',
  title = '',
  description = '',
}) => {
  return (
    <article className="article-card">
      <img className="article-card__image" src={image} alt="" />
      <div className="article-card__content">
        <span className="article-card__author">{author}</span>
        <h2 className="article-card__title">{title}</h2>
        <p className="article-card__description">{description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
