import * as React from 'react';
import Button from '@mui/material/Button';
import RedditIcon from '@mui/icons-material/Reddit';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
  loadSearchResults
} from './searchResultsSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearch = () => {
    if (searchTerm.length === 0) {
      return
    }
    dispatch(loadSearchResults(searchTerm));
    dispatch(clearSearchTerm())
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
          onClick={handleOnChange}>
          SEARCH
        </Button>
      
    </div>
  );
};

export default Search;
