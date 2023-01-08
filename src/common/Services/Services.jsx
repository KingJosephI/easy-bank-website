import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Service from './Service/Service';

const Services = () => {
  return (
    <section>
      <h1>Why choose Easybank?</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div>
        <Service
          icon="../../images/icon-online.svg"
          title="Online Banking"
          description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
      </div>
    </section>
  );
};

export default Services;
