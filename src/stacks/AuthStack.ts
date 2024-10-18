import {AuthRoutes} from '../constants';
import {Login} from '../screens';

export type AuthParamsList = {
  [AuthRoutes.Login]: undefined;
};

type AuthStackScreenPropType = {
  name: AuthRoutes;
  component: React.FC;
};

export const AuthStack: AuthStackScreenPropType[] = [
  {
    name: AuthRoutes.Login,
    component: Login,
  },
];
