import '../scss/results.scss';
import { stringIsNullOrEmpty } from '../utils/strings';

const DisplayGIF = ({ giphy, setShowSnackbar }) => {
  const copyGIFUrl = ({ url }) => {
    navigator.clipboard.writeText(url);
    setShowSnackbar(true);
  };

  return (
    <div className="results__container">
      {giphy?.data.map((gif) => {
        return (
          <div className="gif__card" key={gif.id}>
            <img
              src={gif.images.downsized.url}
              alt={gif.title}
              className="gif__card__image"
            />
            <div className="gif__card__overview">
              <h3>
                <a href={gif.url} target="_blank">
                  {stringIsNullOrEmpty(gif.title) ? gif.username : gif.title}
                </a>
              </h3>
              <div>
                <button onClick={() => copyGIFUrl(gif)}>Copy GIF URL</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayGIF;
