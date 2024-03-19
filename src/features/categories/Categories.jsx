import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';
import FashionIcon from '@mui/icons-material/Checkroom';
import GamingIcon from '@mui/icons-material/SportsEsports';
import BitcoinIcon from '@mui/icons-material/Paid';
import categories from '../../data/listOfCategories.json';
import { loadCategoryResults, setCategory } from './categoriesSlice';
import { useDispatch } from 'react-redux';

const iconComponents = [
  <PetsIcon />,
  <FashionIcon />,
  <GamingIcon />,
  <BitcoinIcon />,
];

const CategoriesButtons = () => {
  const dispatch = useDispatch();

  const handleClick = (category) => {
    dispatch(setCategory(category))
    dispatch(loadCategoryResults(category))
  };

  const handleEnter = (event, category) => {
    if (event.key === 'Enter') {
      handleClick(category);
    }
  }
  return (
    <div>
      <Stack
        direction='row'
        spacing={3}>
        {categories.map((category, i) => {
          return (
            <Button
              key={category.value}
              startIcon={iconComponents[i]}
              variant='contained'
              onClick={handleClick(category.urlSnippet)}
              onKeyDown={(event) => handleEnter(event, category.urlSnippet)}
            >
              {category.value}
            </Button>
          );
        })}
      </Stack>
    </div>
  );
};

export default CategoriesButtons;
