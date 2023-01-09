import * as React from 'react';
import Articles from '../common/Articles/Articles';
import Layout from '../common/Layout/Layout';
import Services from '../common/Services/Services';
import '../styles/global.scss';

export default function Home() {
  return (
    <Layout>
      <Services />
      <Articles />
    </Layout>
  );
}
