import * as React from 'react';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import FashionIcon from '@mui/icons-material/Checkroom';
import GamingIcon from '@mui/icons-material/SportsEsports';
import BitcoinIcon from '@mui/icons-material/Paid';
import categories from '../../data/listOfCategories.json';
import {
  loadCategoryResults,
  selectCategory,
  setCategory,
} from './categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm } from '../search/searchResultsSlice';
import { useNavigate } from 'react-router-dom';

const iconComponents = [
  <PetsIcon />,
  <FashionIcon />,
  <GamingIcon />,
  <BitcoinIcon />,
];

const CategoriesButtons = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const navigate = useNavigate()

  const handleClick = (category) => {
    dispatch(clearSearchTerm());
    dispatch(setCategory(category));
    dispatch(loadCategoryResults(category));
    navigate(`categories-results/${category}`);
  };

  const handleEnter = (event, category) => {
    if (event.key === 'Enter') {
      handleClick(category);
    }
  };


  return (
    <div className='flex flex-wrap justify-center gap-2 py-4'>
     
      {categories.map((category, i) => {
        return (
          <Button
            key={category.value}
            startIcon={iconComponents[i]}
            variant='contained'
            onClick={() => handleClick(category.value)}
            onKeyDown={(event) => handleEnter(event, category.value)}>
            {category.value}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoriesButtons;
