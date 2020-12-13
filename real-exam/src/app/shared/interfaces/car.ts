import {IUser} from './user';

export interface ICar {
  _id: string;
  modelName: string;
  description: string;
  price: number;
  contact: string;
  imageUrl: string;
  author: IUser;
  created_at: string;
  updatedAt: string;
  __V: number;
}
