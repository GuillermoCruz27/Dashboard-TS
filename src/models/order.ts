export interface Order {
  id: string;
  cliente: string;
  produtos: string[];
  valorTotal: number;
  data: string;
  status: string;
}
