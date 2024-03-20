import * as React from 'react';
import Button from '@mui/material/Button';
import RedditIcon from '@mui/icons-material/Reddit';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
  loadSearchResults,
} from './searchResultsSlice';
import { useEffect } from 'react';
import { clearCategory } from '../categories/categoriesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearch = () => {
    if (searchTerm.length === 0) {
      return;
    }
    dispatch(clearCategory())
    dispatch(loadSearchResults(searchTerm));
  };

  const handleOnChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearSearchTerm())
  //   }
  // }, [dispatch])

  return (
    <div className='pt-4'>
      <label htmlFor='searchInput'>What topic are you looking for?</label>
      <TextField
        id='searchInput'
        label='Search Reddit'
        variant='outlined'
        value={searchTerm}
        onChange={handleOnChange}
        onKeyDown={handleEnter}
      />

      <Button
        variant='outlined'
        startIcon={<RedditIcon />}
        onClick={handleSearch}>
        SEARCH
      </Button>
    </div>
  );
};

export default Search;
