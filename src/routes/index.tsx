import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(() => import('src/components/layout'));
const HomePage = lazy(() => import('../pages/home'));
const Page404 = lazy(() => import('../pages/404'));
const CreateAccountPage = lazy(() => import('../pages/create-account'));
const AddExistingAccountPage = lazy(() => import('../pages/add-account'));
const DashboardPage = lazy(() => import('../pages/dashboard'));

import paths from './path';

export default function Router() {
  return useRoutes([
    {
      path: paths.HOME,
      element: (
        <DashboardLayout>
          {' '}
          <HomePage />{' '}
        </DashboardLayout>
      ),
    },
    {
      path: paths.NEW_ACCOUNT,
      element: (
        <DashboardLayout>
          <CreateAccountPage />
        </DashboardLayout>
      ),
    },
    {
      path: paths.ADD_ACCOUNT,
      element: (
        <DashboardLayout>
          <AddExistingAccountPage />
        </DashboardLayout>
      ),
    },
    {
      path: paths.DASHBOARD,
      element: (
        <DashboardLayout>
          <DashboardPage />{' '}
        </DashboardLayout>
      ),
    },
    {
      path: paths.NOT_FOUND,
      element: <Page404 />,
    },
    { path: '*', element: <Page404 /> },
  ]);
}
