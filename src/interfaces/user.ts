export interface IUser {
  id: number | string;
  accessToken?: string;
  email: string;
  name: string;
  phoneNumber?: number | string;
  role: string;
}
