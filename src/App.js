import React from 'react';
import StepContainer from './components/stepContainer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workflow from './workflow.json';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentStep: Workflow.steps.find((element) => {
        return element.id === Workflow.initialStepId;
      })
    };

    this.handleOption1Selected = this.handleOption1Selected.bind(this);
    this.handleOption2Selected = this.handleOption2Selected.bind(this);
    this.moveToNextStep = this.moveToNextStep.bind(this);
  }

  handleOption1Selected() {
    console.log('Left click. Move to ' + this.state.currentStep.option1.nextStepId);
    this.moveToNextStep(this.state.currentStep.option1.nextStepId);
  }

  handleOption2Selected() {
    console.log('Right click. Move to ' + this.state.currentStep.option2.nextStepId);
    this.moveToNextStep(this.state.currentStep.option2.nextStepId);
  }

  moveToNextStep(nextStepId) {
    this.setState({
      currentStep: Workflow.steps.find((element) => {
        return element.id === nextStepId;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {Workflow.title}
          </p>
          <StepContainer 
            currentStep={this.state.currentStep} 
            onOption1Selected={this.handleOption1Selected} 
            onOption2Selected={this.handleOption2Selected} />
        </header>
      </div>
    );
  }
}

export default App;
