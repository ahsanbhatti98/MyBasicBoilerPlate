import {HomeRoutes} from '../constants';
import {Home, Profie} from '../screens';

export type HomeParamList = {
  [HomeRoutes.Home]: undefined;
  [HomeRoutes.Profile]: undefined;
};

type HomeStackScreenPropType = {
  name: HomeRoutes;
  component: React.FC;
};

export const HomeStack: HomeStackScreenPropType[] = [
  {
    name: HomeRoutes.Home,
    component: Home,
  },
  {
    name: HomeRoutes.Profile,
    component: Profie,
  },
];
