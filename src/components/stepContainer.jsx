import React from 'react';
import PropTypes from 'prop-types';
import OptionContainer from './optionContainer';
import VideoContainer from './videoContainer';

export class StepContainer extends React.Component {
  render() {

    if (this.props.currentStep.youtubeVideoId){
      return (
        <VideoContainer 
          youtubeVideoId={this.props.currentStep.youtubeVideoId}
        />)
    }

    return (
        <OptionContainer 
        title={this.props.currentStep.title}
        option1Image={this.props.currentStep.option1.imageUrl}
        onOption1Selected={this.props.onOption1Selected}
        option2Image={this.props.currentStep.option2.imageUrl}
        onOption2Selected={this.props.onOption2Selected}
        />
    )
  };
};

StepContainer.propTypes = {
    currentStep: PropTypes.object,
    onOption1Selected: PropTypes.func,
    onOption2Selected: PropTypes.func
};

export default StepContainer;