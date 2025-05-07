
import React from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ProductsGrid from '@/components/ProductsGrid';
import { useInventory } from '@/hooks/useInventory';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

const Index: React.FC = () => {
  const { 
    categories, 
    products, 
    selectedCategoryId, 
    setSelectedCategoryId, 
    isLoading, 
    error,
    getCategoryName,
    getSupplierName
  } = useInventory();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Inventory Management</h1>
          <p className="text-gray-600">Browse products by category and check stock levels</p>
        </div>
        
        {error ? (
          <Alert variant="destructive" className="mb-6">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load inventory data. Please check your API connection.
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <CategoryFilter
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={setSelectedCategoryId}
                isLoading={isLoading}
              />
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedCategoryId 
                  ? getCategoryName(selectedCategoryId) 
                  : 'All Products'}
              </h2>
              <ProductsGrid 
                products={products} 
                getCategoryName={getCategoryName}
                getSupplierName={getSupplierName}
                isLoading={isLoading}
              />
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Item Nexus Catalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
