import { PrivateRoutes } from '@/models/routes.model';
import { Roles } from '@/models/role.model';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

interface Props {
  rol: Roles | string;
}

const RolGuard = ({ rol = '' }: Props) => {
  const userState = useSelector((state: AppStore) => state.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.DASHBOARD} />
  );
};

export default RolGuard;
