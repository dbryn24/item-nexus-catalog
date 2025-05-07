
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts, fetchProductsByCategory, fetchSuppliers } from "@/services/api";
import { useState } from "react";

export function useInventory() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const suppliersQuery = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchSuppliers,
  });

  const productsQuery = useQuery({
    queryKey: ["products", selectedCategoryId],
    queryFn: () => selectedCategoryId ? fetchProductsByCategory(selectedCategoryId) : fetchProducts(),
  });

  const isLoading = categoriesQuery.isLoading || suppliersQuery.isLoading || productsQuery.isLoading;
  const error = categoriesQuery.error || suppliersQuery.error || productsQuery.error;

  const getSupplierName = (supplierId: string): string => {
    const supplier = suppliersQuery.data?.find(s => s.id === supplierId);
    return supplier?.name || "Unknown Supplier";
  };

  const getCategoryName = (categoryId: string): string => {
    const category = categoriesQuery.data?.find(c => c.id === categoryId);
    return category?.name || "Unknown Category";
  };

  return {
    categories: categoriesQuery.data || [],
    products: productsQuery.data || [],
    suppliers: suppliersQuery.data || [],
    selectedCategoryId,
    setSelectedCategoryId,
    isLoading,
    error,
    getSupplierName,
    getCategoryName,
  };
}
