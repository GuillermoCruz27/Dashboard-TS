import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PrivateRoutes } from '@/models/routes.model';
import { createUser } from '@/redux/slices/user.slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// import { loginService } from '@/services/auth.service';

interface dataUser {
  email: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const dispatch = useDispatch();
  const [data, setData] = useState<dataUser>({ email: '', password: '' });
  const navigate = useNavigate();

  const login = async () => {
    try {
      // const result = await loginService(data);
      // dispatch(createUser(result?.data));
      const result = {
        data: {
          token: 'fake-jwt-token',
          user: {
            _id: '1',
            name: 'Carlos Altamirano',
            email: data.email,
            avatarUrl: 'https://avatars.githubusercontent.com/u/1315101',
            rol: 'admin',
            password: data.password,
            accessToken: 'fake-jwt-token',
          },
        },
      };
      console.log('Simulated login result:', result);

      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data.user));
      dispatch(createUser(result.data.user));
      console.log('Navigating to dashboard...');
      navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data?.email) return console.log('Debe colocar un correo electronico');

    if (!data?.password) return console.log('Debe colocar la contraseña');

    login();
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico a continuación para iniciar sesión en
            tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electronico</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
              <Button variant="outline" className="w-full">
                Inicia sesión con Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes cuenta?{' '}
              <a href="#" className="underline underline-offset-4">
                Registrate
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
