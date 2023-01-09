import React from 'react';
import Service from './Service/Service';
import onlineBanking from '../../images/icon-online.svg';
import budgetingIcon from '../../images/icon-budgeting.svg';
import onboardingIcon from '../../images/icon-onboarding.svg';
import openIcon from '../../images/icon-api.svg';
import './Services.scss';

const Services = () => {
  return (
    <section className="services">
      <h1 className="services__title">Why choose Easybank?</h1>
      <p className="services__description">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="services__list">
        <Service
          icon={onlineBanking}
          title="Online Banking"
          description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <Service
          icon={budgetingIcon}
          title="Simple Budgeting"
          description="See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits."
        />
        <Service
          icon={onboardingIcon}
          title="Fast Onboarding"
          description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <Service
          icon={openIcon}
          title="Open API"
          description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </section>
  );
};

export default Services;
