import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '@app';
import { AuthLayout } from '../app/auth/index';
import {
  Stat,
  NewOrder,
  NewCanceled,
  NewCompleted,
  Leads,
} from '@pages';
import { SiginIn } from '../pages/sigin/index';

const router = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '/', element: <Stat /> },
      { path: '/orders', element: <NewOrder /> },
      { path: '/orders-cenceld', element: <NewCanceled /> },
      { path: '/order-completed', element: <NewCompleted /> },
      { path: '/leads', element: <Leads /> },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout/>,
    children: [
      {path: '/login', element: <SiginIn/>}
    ]
  },
  {
    path: '*',
    element: <h1>Error</h1>,
  },
];
export const AppRouter = createBrowserRouter(router);
