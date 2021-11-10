import PropTypes from 'prop-types';
import React from 'react';

export default function YouTubeVideo({ url }) {
  const allowOptions = 'accelerometer; '
    + 'autoplay; '
    + 'clipboard-write; '
    + 'encrypted-media; '
    + 'gyroscope; '
    + 'picture-in-picture';
  const embedURL = url.replace('watch?v=', 'embed/');

  return (
    <iframe
      width="560"
      height="315"
      src={ embedURL }
      title="YouTube video player"
      frameBorder="0"
      allow={ allowOptions }
      allowFullScreen
      data-testid="video"
    />
  );
}

YouTubeVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
