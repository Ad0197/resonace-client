export default interface Furniture {
  name: string;
  picture: {
    url: string;
  }[];
  description: string;
  link: string;
  type: string;
  unitCost: string;
  materialsAndFinishes: string[];
  settings: string[];
  size: string;
  notes: string;
  vendor: string[];
  designer: string[];
  unitsInStore: string;
  totalUnitsSold: number;
  grossSales: number;
  id: string;
  inStock: boolean;
  orders: string[];
  schematic: string[];
}
