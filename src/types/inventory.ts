
export interface Category {
  id: string;
  name: string;
}

export interface Supplier {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  supplierId: string;
  price: number;
  stockQuantity: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
