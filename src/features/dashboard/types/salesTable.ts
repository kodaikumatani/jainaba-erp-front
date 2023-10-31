import { Product } from './product';

export type SalesTable = {
  id: number;
  store: string;
  value: number;
  products: Product[];
};
