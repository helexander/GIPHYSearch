import React from 'react';
import DisplayGIF from './DisplayGIF';
import { IconButton } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { arrayIsNullOrEmpty } from '../utils/arrays';

const SearchResults = ({
  giphy,
  setShowSnackbar,
  offsetGif,
  setOffsetGif,
  limitResult,
}) => {
  const handlePreviousClicked = () => {
    setOffsetGif(offsetGif - limitResult);
  };

  const handleNextClicked = () => {
    setOffsetGif(offsetGif + limitResult);
  };

  const generatePrevAndNextButton = () => {
    return (
      <div>
        <IconButton disabled={offsetGif === 0} onClick={handlePreviousClicked}>
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
        <IconButton
          disabled={giphy?.data.length < limitResult}
          onClick={handleNextClicked}
        >
          <ArrowCircleRightIcon fontSize="large" />
        </IconButton>
      </div>
    );
  };

  return (
    <>
      <DisplayGIF giphy={giphy} setShowSnackbar={setShowSnackbar} />
      {!arrayIsNullOrEmpty(giphy?.data) && generatePrevAndNextButton()}
    </>
  );
};

export default SearchResults;
