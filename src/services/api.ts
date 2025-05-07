
import { ApiResponse, Category, Product, Supplier } from "@/types/inventory";

export const API_BASE_URL = "http://localhost:5000/api";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/category`);
    const data: ApiResponse<Category[]> = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch categories");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/product`);
    const data: ApiResponse<Product[]> = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch products");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchSuppliers(): Promise<Supplier[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/supplier`);
    const data: ApiResponse<Supplier[]> = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch suppliers");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return [];
  }
}

export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/product/category/${categoryId}`);
    const data: ApiResponse<Product[]> = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch products by category");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}
