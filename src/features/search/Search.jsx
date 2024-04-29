import * as React from 'react';
import Button from '@mui/material/Button';
import RedditIcon from '@mui/icons-material/Reddit';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSearchTerm,
  setSearchTerm,
  // loadSearchResults,
} from './searchResultsSlice';
import { clearCategory } from '../categories/categoriesSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.length === 0) {
      return;
    }
    dispatch(clearCategory())
    // dispatch(loadSearchResults(searchTerm));
    navigate(`/search-results/${searchTerm}`);
  };

  const handleOnChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  

  return (
    <div className='pt-4 font-quicksand flex gap-2 justify-center py-4'>
      <label htmlFor='searchInput'></label>
      <TextField
        id='searchInput'
        type='text'
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
