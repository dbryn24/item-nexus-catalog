
import React from 'react';
import { Product } from '@/types/inventory';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Product[];
  getCategoryName: (categoryId: string) => string;
  getSupplierName: (supplierId: string) => string;
  isLoading: boolean;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ 
  products, 
  getCategoryName, 
  getSupplierName,
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const categoryName = getCategoryName(product.categoryId);
        const supplierName = getSupplierName(product.supplierId);
        
        return (
          <ProductCard
            key={product.id}
            product={product}
            categoryName={categoryName}
            supplierName={supplierName}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
