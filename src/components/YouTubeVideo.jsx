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
    <div>
      <h4>Video</h4>
      <iframe
        src={ embedURL }
        title="YouTube video player"
        frameBorder="0"
        allow={ allowOptions }
        allowFullScreen
        data-testid="video"
      />
    </div>
  );
}

YouTubeVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
