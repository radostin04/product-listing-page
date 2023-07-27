export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
  rating: number;
  discount: number | null
  id?: number
}