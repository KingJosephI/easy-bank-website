import React from 'react';
import ArticleCard from './ArticleCard/ArticleCard';
import currenciesImage from '../../images/image-currency.jpg';
import confettiImage from '../../images/image-confetti.jpg';
// import mockupsImage from '../../images/image-mockups.png';
import restaurantImage from '../../images/image-restaurant.jpg';
import planeImage from '../../images/image-plane.jpg';
import './Articles.scss';

const Articles = () => {
  return (
    <section className="articles">
      <h1 className="articles__title">Latest Articles</h1>
      <div className="articles__list">
        <ArticleCard
          image={currenciesImage}
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
          description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        />
        <ArticleCard
          image={restaurantImage}
          author="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />

        <ArticleCard
          image={planeImage}
          author="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <ArticleCard
          image={confettiImage}
          author="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </section>
  );
};

export default Articles;
