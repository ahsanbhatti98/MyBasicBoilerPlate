export type LoginBodyType = {
  username?: string;
  password?: string;
  token_fcm: string;
};

export type PendingTaskBodyType = {
  id_user: number;
};
