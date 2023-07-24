import { useState } from 'react';
import { arrayIsNullOrEmpty } from '../utils/arrays';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import '../scss/searchbar.scss';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const limitResult = 15;

const SearchPage = () => {
  const [offsetGif, setOffsetGif] = useState(0);
  const [giphy, setGiphy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const snackbarAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <SearchBar
        setGiphy={setGiphy}
        setIsLoading={setIsLoading}
        offsetGif={offsetGif}
        setOffsetGif={setOffsetGif}
        limitResult={limitResult}
      />
      {isLoading && (
        <div>
          <CircularProgress /> Fetching GIF
        </div>
      )}
      {!arrayIsNullOrEmpty(giphy?.data) || isLoading ? (
        <SearchResults
          giphy={giphy}
          setShowSnackbar={setShowSnackbar}
          offsetGif={offsetGif}
          setOffsetGif={setOffsetGif}
          limitResult={limitResult}
        />
      ) : (
        <div>There are no search results.</div>
      )}
      <Snackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        message="URL has been copied to clipboard"
        autoHideDuration={4000}
        action={snackbarAction}
      />
    </>
  );
};

export default SearchPage;
