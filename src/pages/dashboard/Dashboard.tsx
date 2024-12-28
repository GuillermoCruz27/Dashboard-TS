import { Outlet } from 'react-router';
// import UserNav from '@/components/userNav/UserNav';
// import { PrivateRoutes } from '@/models/routes.model';
import AppSidebar from './sidebar/AppSidebar';
import MainContainer from './mainContainer/MainContainer';
import { SidebarProvider } from '@/components/ui/sidebar';
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react';

const data = {
  user: {
    name: 'Carlos Altramirano',
    email: 'carlos27@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/1315101',
  },
  navMain: [
    {
      title: 'Tablero',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
      ],
    },
    {
      title: 'Clientes',
      url: '#',
      icon: Bot,
      items: [
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
      ],
    },
    {
      title: 'Choferes',
      url: '#',
      icon: Bot,
      items: [
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
      ],
    },
    {
      title: 'Viajes',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Nuevo',
          url: 'viajes/nuevo',
        },
        {
          title: 'Modificar',
          url: 'viajes/editar',
        },
        {
          title: 'Dar de baja',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentacion',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
        {
          title: '![Continuar]',
          url: '#',
        },
      ],
    },
    {
      title: 'Configuracion',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Equipo',
          url: '#',
        },
        {
          title: 'Pagos',
          url: '#',
        },
        {
          title: 'Limites',
          url: '#',
        },
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    // <>
    //   <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    //     <div className="px-3 py-3 lg:px-5 lg:pl-3">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center justify-start">
    //           <button
    //             type="button"
    //             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           >
    //             <span className="sr-only">Open sidebar</span>
    //           </button>
    //           <Link
    //             to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`}
    //             className="flex ml-2 md:mr-24"
    //           >
    //             <img src="../logo.svg" className="h-8 mr-3" alt="Vypers Logo" />
    //             <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
    //               Vypers
    //             </span>
    //           </Link>
    //         </div>
    //         <div className="flex items-center">
    //           <UserNav />
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <aside
    //     id="logo-sidebar"
    //     className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    //     aria-label="Sidebar"
    //   >
    //     <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    //       <ul className="space-y-2 font-medium">
    //         <li>
    //           <Link
    //             to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`}
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <span className="ml-3">Dashboard</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    //   <div className="p-4 py-20 sm:ml-64 bg-gray-50 dark:bg-gray-900 h-screen dark:text-white">
    //     <Outlet />
    //   </div>
    // </>
    <>
      <SidebarProvider>
        <AppSidebar navMain={data.navMain} />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
