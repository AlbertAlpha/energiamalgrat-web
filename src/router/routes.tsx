import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('~/pages/home'));
const Projects = React.lazy(() => import('~/pages/projects'));
const Contact = React.lazy(() => import('~/pages/contact'));
const About = React.lazy(() => import('~/pages/about'));

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
