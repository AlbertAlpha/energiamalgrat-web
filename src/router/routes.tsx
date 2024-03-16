import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import About from '~/pages/about';
import Contact from '~/pages/contact';
import Projects from '~/pages/projects';

const Home = React.lazy(() => import('~/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
