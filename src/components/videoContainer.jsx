import React from 'react';
import PropTypes from 'prop-types';

export class VideoContainer extends React.Component {
  render() {
    return (
      <a href="#">
          {this.props.videoUrl}
      </a>
    )
  };
};

VideoContainer.propTypes = {
    videoUrl: PropTypes.string
};

export default VideoContainer;