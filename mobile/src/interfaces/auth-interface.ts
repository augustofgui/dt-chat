export interface SignUpData {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  pictureUrl: string;
  createdAt: string;
  updatedAt: string;
}
