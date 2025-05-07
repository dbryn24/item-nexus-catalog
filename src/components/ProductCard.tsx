
import React from 'react';
import { Product } from '@/types/inventory';
import { formatCurrency } from '@/utils/inventoryUtils';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
  categoryName: string;
  supplierName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryName, supplierName }) => {
  const stockStatus = () => {
    if (product.stockQuantity <= 0) return { color: 'bg-red-100 text-red-700', text: 'Out of stock' };
    if (product.stockQuantity < 10) return { color: 'bg-yellow-100 text-yellow-700', text: 'Low stock' };
    return { color: 'bg-green-100 text-green-700', text: 'In stock' };
  };

  const { color, text } = stockStatus();

  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader className="p-4 pb-2 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500">Category: {categoryName}</p>
        </div>
        <span className="text-lg font-bold text-inventory-secondary">{formatCurrency(product.price)}</span>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              <span className="font-medium">Supplier:</span> {supplierName}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={color}>
              {text}
            </Badge>
            <span className="text-sm font-medium">{product.stockQuantity} units</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
