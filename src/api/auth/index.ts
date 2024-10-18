import httpServices from '../httpservices';

const login = (body: any) => {
  return httpServices().post('login', body);
};

export const AuthApis = {
  login,
};
