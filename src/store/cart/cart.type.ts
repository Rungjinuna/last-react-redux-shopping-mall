import { IProduct } from '../products/products.type';

export type CartState = {
  products: IProduct[];
  totalPrice: number;
  userId: string;
  orders: Order[];
};

export interface Order {
  id: string;
  totalPrice: number;
  products: IProduct[];
}
