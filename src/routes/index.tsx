import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Page404 = lazy(() => import('../pages/404'));
const HomePage = lazy(() => import('../pages/home'));
const CreateAccountPage = lazy(() => import('../pages/create-account'));
const AddExistingAccountPage = lazy(() => import('../pages/add-account'));
const DashboardPage = lazy(() => import('../pages/dashboard'));

import paths from './path';

export default function Router() {

    return useRoutes([
        {
            path: paths.HOME,
            element: <HomePage />,
        },
        {
            path: paths.NEW_ACCOUNT,
            element: <CreateAccountPage />,
        },
        {
            path: paths.ADD_ACCOUNT,
            element: <AddExistingAccountPage />,
        },
        {
            path: paths.DASHBOARD,
            element: <DashboardPage />,
        },
        {
            path: paths.NOT_FOUND,
            element: <Page404 />,
        },
        { path: '*', element: <Page404 /> },
    ]);
}