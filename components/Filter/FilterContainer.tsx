import React, { useState } from 'react';
import { FilterUI } from './FilterUI';

interface FilterContainerProps {
  variant: "modal" | "topbar" | "sidebar";
}

export function FilterContainer({ variant }: FilterContainerProps) {
  const [filters, setFilters] = useState({
    bookmark: 'all',
    difficulty: 'all',
    quizType: 'all',
    subject: 'all',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleChange = (newFilters: any) => { // TODO: Define a proper type for newFilters
    setFilters(newFilters);
    // TODO: API 호출 or 리스트 갱신 로직
    console.log('Filters changed:', newFilters);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FilterUI
      variant={variant}
      filters={filters}
      onChange={handleChange}
      isModalOpen={isModalOpen}
      onCloseModal={handleCloseModal}
      onOpenModal={handleOpenModal} // Pass the open function
    />
  );
}