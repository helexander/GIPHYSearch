import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { stringIsNullOrEmpty } from '../utils/strings';
import { retrieveGifs } from '../utils/api';

const SearchBar = ({
  offsetGif,
  setOffsetGif,
  setIsLoading,
  limitResult,
  setGiphy,
}) => {
  const [query, setQuery] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    retrieveGifs({
      query,
      limitResult,
      offsetGif,
      setGiphy,
      setIsLoading,
    });
  }, [offsetGif]);

  const handleQueryInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (stringIsNullOrEmpty(query)) {
      setShowErrorMessage(true);
      return;
    }
    setOffsetGif(0);
    setIsLoading(true);
    setShowErrorMessage(false);
    retrieveGifs({
      query,
      limitResult,
      offsetGif,
      setGiphy,
      setIsLoading,
    });
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          onKeyDown={handleEnterKeyPress}
          onChange={handleQueryInput}
          value={query}
          placeholder="Search for a GIF..."
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </div>
      {showErrorMessage && (
        <div>Please enter a valid value in the input bar</div>
      )}
    </>
  );
};

export default SearchBar;
