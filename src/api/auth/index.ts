import {LoginBodyType} from '../../models';
import httpService from '../https.service';
import Urls from './api.url';

const login = (body: LoginBodyType) => {
  return httpService().post(Urls.login, body);
};

export const AuthApis = {
  login,
};
