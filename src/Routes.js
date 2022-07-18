import { useRoutes } from 'react-router-dom';
import CHAT001 from './CHAT001';
import CHAT002 from './CHAT002';

const Routes = () => {
  const route = [
    { path: '/', element: <CHAT001 /> },
    { path: '/CHAT002', element: <CHAT002 /> },
  ];

  const routes = useRoutes(route);
  return routes;
};

export default Routes;
