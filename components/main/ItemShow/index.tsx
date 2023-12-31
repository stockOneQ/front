// components/MainSection.tsx
import React from 'react';
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
      {selectedCategory === 'beforeDate' &&
        renderItems(filteredApproachingExpiration)}
      {selectedCategory === 'afterDate' && renderItems(filteredExpiredItems)}
      {selectedCategory === 'no' &&
        renderItems(filteredInsufficientIngredients)}
      {searchTerm !== ''
        ? renderItems(searchResults)
        : renderItems(filteredItems)}
    </S.MainSection>
  );
};

export default MainSection;
