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
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [redirectUri, setRedirectUri] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUri(window.location.origin);
    }
  }, []);

  if (!redirectUri) {
    return null; // Prevents rendering until redirectUri is set
  }

  return (
    <Auth0Provider
      domain="dev-7hl8rw07vhindcpd.us.auth0.com"
      clientId="LglRoyCgeMjFeBWZoOBk72Ric4H1u5jQ"
      authorizationParams={{
        redirect_uri: redirectUri
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
  );
};

export default Home;
