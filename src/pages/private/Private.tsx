import { Route } from 'react-router';
import { lazy } from 'react';
import RoutesError from '@/utilities/route-error/Routes-error';

const Home = lazy(() => import('./home/Home'));

const Private = () => {
  return (
    <RoutesError>
      <Route path="/" element={<Home />} />
    </RoutesError>
  );
};

export default Private;
