export interface IProduct {
  id: string | number;
  name: string;
  price: number;
  original_price: number;
  description: string;
  images: { base_url: string }[];
  brand: string;
  specifications: ISpecification[];
}

export interface ISpecification {
  name: string;
  attributes: {
    code: string;
    name: string;
    value: string;
  };
}
