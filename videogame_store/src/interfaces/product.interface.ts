export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type TCreateProduct = Omit<IProduct, 'id'>;
