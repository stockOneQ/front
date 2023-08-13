// components/MainSection.tsx
import React from 'react';
<<<<<<< HEAD
import { Product } from '../../../recoil/states';
import * as S from '../Ingredients/style';

type MainSectionProps = {
  selectedCategory: string;
  filteredApproachingExpiration: Product[];
  filteredExpiredItems: Product[];
  filteredInsufficientIngredients: Product[];
  searchResults: Product[];
  filteredItems: Product[];
  renderItems: (items: Product[]) => JSX.Element[];
=======
import { ProductItem } from '../../../recoil/states'; 
import * as S from '../Ingredients/style';


type MainSectionProps = {
  selectedCategory: string;
  filteredApproachingExpiration: ProductItem[];
  filteredExpiredItems: ProductItem[];
  filteredInsufficientIngredients: ProductItem[];
  searchResults: ProductItem[];
  filteredItems: ProductItem[];
  renderItems: (items: ProductItem[]) => JSX.Element[];
>>>>>>> ff4bb25 (Merge branch develop into main)
  searchTerm: string;
};

const MainSection: React.FC<MainSectionProps> = ({
  selectedCategory,
  filteredApproachingExpiration,
  filteredExpiredItems,
  filteredInsufficientIngredients,
  searchResults,
  filteredItems,
  renderItems,
  searchTerm,
}) => {
  return (
    <S.MainSection>
<<<<<<< HEAD
      {selectedCategory === 'beforeDate' &&
        renderItems(filteredApproachingExpiration)}
      {selectedCategory === 'afterDate' && renderItems(filteredExpiredItems)}
      {selectedCategory === 'no' &&
        renderItems(filteredInsufficientIngredients)}
      {searchTerm !== ''
        ? renderItems(searchResults)
        : renderItems(filteredItems)}
    </S.MainSection>
=======
    {selectedCategory === 'beforeDate' && renderItems(filteredApproachingExpiration)}
    {selectedCategory === 'afterDate' && renderItems(filteredExpiredItems)}
    {selectedCategory === 'no' && renderItems(filteredInsufficientIngredients)}
    {searchTerm !== '' ? renderItems(searchResults) : renderItems(filteredItems)}
  </S.MainSection>

>>>>>>> ff4bb25 (Merge branch develop into main)
  );
};

export default MainSection;
