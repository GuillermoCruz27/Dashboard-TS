import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router';
import Loading from './components/loading/Loading';
import { Provider } from 'react-redux';
import RoutesError from './utilities/route-error/Routes-error';
import { PrivateRoutes, PublicRoutes } from './models/routes.model';
import store from './redux/store';
import AuthGuard from './guards/auth.guard';
import RolGuard from './guards/rol.guard';
import { Roles } from './models/role.model';
import Dashboard from './pages/dashboard/Dashboard';

const Login = lazy(() => import('@/pages/login/Login'));
const Private = lazy(() => import('@/pages/private/Private'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesError>
            <Route
              path="/"
              element={<Navigate to={PrivateRoutes.DASHBOARD} />}
            />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard privateValidation={true} />}>
              <Route element={<Dashboard />}>
                <Route element={<RolGuard rol={Roles.ADMIN} />}>
                  <Route
                    path={`${PrivateRoutes.DASHBOARD}/*`}
                    element={<Private />}
                  />
                </Route>
              </Route>
            </Route>
          </RoutesError>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
