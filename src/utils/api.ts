/* eslint-disable camelcase */
import axios from 'axios';
import { isNullOrUndefined } from './objects';

const baseURL = `https://api.giphy.com/v1/gifs/search`;
const APIKEY = 'Z2Hxt7iLW8VCbn2pxFWKq4AIgFVaDBFc'; // to do: store this somewhere safe

export const retrieveGifs = async ({
  query,
  limitResult,
  offsetGif,
  setGiphy,
  setIsLoading,
}) => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        api_key: APIKEY,
        q: query,
        limit: limitResult,
        offset: offsetGif,
      },
    });

    if (isNullOrUndefined(data)) {
      throw new Error(data);
    }
    setGiphy(data);
  } catch (e) {
    console.error('Failed to retrieve data');
  } finally {
    setIsLoading(false);
  }
};
