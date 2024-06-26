"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";
import Link from 'next/link';

import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';
import { fadeIn, slideIn } from '@/styles/animations';

import '@/styles/glow.css';  // Import the CSS file for the glow effect

// Custom hook to check if the component is mounted in the client
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

/**
 * Hides the navbar while scrolling down
 * @param {Object} config - configuration object
 * @param {String} [config.id=navbar] - ID of navbar
 * @param {Number} [config.offset=100] - Offset of navbar in px
 * @param {Boolean} config.when - Condition to hide navbar
 */
const hideNavWhileScrolling = ({ id = 'navbar', offset = 100, when }: { id?: string; offset?: number; when: boolean }) => {
  if (typeof window === 'undefined') return;  // Ensure we are in the client-side environment
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      const curScrollPos = window.pageYOffset;
      nav.style.top = prevScrollPos < curScrollPos ? `-${offset}px` : '0';
      prevScrollPos = curScrollPos;
    }
  };
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => (
  <motion.li className="group" variants={slideIn({ delay: delay + index / 10, direction: 'down' })} initial="hidden" animate="show">
    <CLink href={href || `/#${children}`} className="block p-2 duration-500 hover:text-accent" onClick={onClick} withPadding>
      {children}
    </CLink>
  </motion.li>
);

const Navbar = () => {
  const isClient = useIsClient();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    if (isClient) {
      hideNavWhileScrolling({ when: !navbarCollapsed });
    }
  }, [isClient, navbarCollapsed]);

  if (!isClient) {
    return null; // Return null during SSR to avoid window access errors
  }

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg"
    >
      <h1 className="relative text-2xl capitalize font-signature text-accent group top-1">
        <Link href="/#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </Link>
      </h1>

      <NavButton onClick={() => setNavbarCollapsed(prev => !prev)} navbarCollapsed={navbarCollapsed} className="md:invisible" />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem key={i} href={url} index={i} delay={ANIMATION_DELAY} onClick={() => setNavbarCollapsed(false)}>
                {name}
              </NavItem>
            ))}

            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <div className="flex items-center gap-5">
                  {isAuthenticated && <h3 className="glow-text">Hy, {user?.name}</h3>}
                  <Button
                    // ameTab={cta?.sameTab}
                    variants={slideIn({ delay: ANIMATION_DELAY + navLinks.length / 10, direction: 'down' })}
                    initial="hidden"
                    animate="show"
                    onClick={isAuthenticated ? () => logout({ logoutParams: { returnTo: window.location.origin } }) : () => loginWithRedirect()}
                  >
                    {isAuthenticated ? 'Log Out' : 'Login'}
                  </Button>
                </div>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({ delay: ANIMATION_DELAY + (navLinks.length + 1) / 10, direction: 'down' })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
