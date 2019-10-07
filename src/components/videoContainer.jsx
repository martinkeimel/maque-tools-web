import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

export class VideoContainer extends React.Component {
  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.youtubeVideoId}
        opts={opts}
      />
    )
  };
};

VideoContainer.propTypes = {
  youtubeVideoId: PropTypes.string
};

export default VideoContainer;