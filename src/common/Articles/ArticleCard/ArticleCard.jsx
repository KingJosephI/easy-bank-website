import React from 'react';

const ArticleCard = ({
  image = '',
  author = '',
  title = '',
  description = '',
}) => {
  return (
    <article>
      <img src={image} alt="Article image" />
      <span>{author}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default ArticleCard;
