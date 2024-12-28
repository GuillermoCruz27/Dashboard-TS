import { PrivateRoutes, PublicRoutes } from '@/models/routes.model';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PublicValidateFragment = (
  <Navigate replace to={`${PrivateRoutes.DASHBOARD}`} />
);
const PrivateValidateFragment = <Outlet />;

interface Props {
  privateValidation: boolean;
}

const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    privateValidation ? (
      PrivateValidateFragment
    ) : (
      PublicValidateFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
