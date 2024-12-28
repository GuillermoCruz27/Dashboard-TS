import NotFound from '@/pages/error/Not-found';
import { Route, Routes } from 'react-router';

interface RouteErrorProps {
  children: JSX.Element | JSX.Element[];
}

const RoutesError = ({ children }: RouteErrorProps) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesError;
