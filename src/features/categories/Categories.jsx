import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Bungalow';
import BookIcon from '@mui/icons-material/AutoStories';
import DiceIcon from '@mui/icons-material/Casino';
import BackIcon from '@mui/icons-material/KeyboardBackspace';
import {
  loadCategoryResults,
  selectCategory,
  setCategory,
} from './categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm } from '../search/searchResultsSlice';
import { useNavigate } from 'react-router-dom';


const buttonData = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Popular', icon: <BookIcon /> },
  { name: 'Boardgames', icon: <DiceIcon /> },
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

  return (
    <div className='flex flex-wrap justify-center gap-2 py-4'>
      <Button
        startIcon={<BackIcon />}
        variant='outlined'
        onClick={() => navigate(-1)}>
        Back
      </Button>
      {buttonData.map((button, i) => {
        return (
          <Button
            key={button.name}
            startIcon={button.icon}
            variant='contained'
            onClick={() => handleClick(button.name)}
          >
            {button.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoriesButtons;
