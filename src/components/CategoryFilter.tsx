
import React from 'react';
import { Category } from '@/types/inventory';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  isLoading: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  isLoading,
}) => {
  if (isLoading) {
    return <div className="p-4">Loading categories...</div>;
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md transition-all ${
            selectedCategoryId === null
              ? 'bg-inventory-primary text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => onSelectCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md transition-all ${
              selectedCategoryId === category.id
                ? 'bg-inventory-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
