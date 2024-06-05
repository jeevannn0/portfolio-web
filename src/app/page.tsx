
"use client"

import { Auth0Provider } from '@auth0/auth0-react';
import {
  About,
  Contact,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Auth0Provider
        domain="dev-7hl8rw07vhindcpd.us.auth0.com"
        clientId="LglRoyCgeMjFeBWZoOBk72Ric4H1u5jQ"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Layout>
          
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </Auth0Provider>
    </>
  );
};

export default Home;
