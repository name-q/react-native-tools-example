import Home from '../pages/home/index/index';
import User from '../pages/user/index/index';
import WaitReturn from '../pages/test/useWaitReturn';
import Msg from '../pages/test/msg';


type Route = {
  name: string;
  component: any;
  key?: number;
};

let pages: Route[] = [
  {
    name: '/home/index',
    component: Home,
  },
  {
    name: '/user/index',
    component: User,
  },
  {
    name: '/test/useWaitReturn',
    component: WaitReturn,
  },
  {
    name: '/test/msg',
    component: Msg,
  },
];

export {pages};
