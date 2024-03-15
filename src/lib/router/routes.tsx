import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import About from '@/lib/pages/about';
import Contact from '@/lib/pages/contact';
import Projects from '@/lib/pages/projects';

const Home = React.lazy(() => import('@/lib/pages/home'));

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
