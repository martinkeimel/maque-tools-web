import React from 'react';
import PropTypes from 'prop-types';
import Option from './option'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class OptionContainer extends React.Component {
    constructor(props, context) {
        super(props, context);     

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
        // TODO: dispose on unmount
        this.timer = null;
        
        this.state = {
            leftOptionSelected: false,
            rightOptionSelected: false
          };
    }

    handleLeftClick(e) {
        this.setState({
            leftOptionSelected: true,
            rightOptionSelected: false
        });
    }

    handleRightClick(e) {
        e.preventDefault();
        this.setState({
            leftOptionSelected: false,
            rightOptionSelected: true
        });
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.leftOptionSelected && this.state.leftOptionSelected) {
            this.timer = setTimeout(() => { 
                this.clearSelection(); 
                this.props.onOption1Selected();
            }, 1000);
        }

        if (!prevState.rightOptionSelected && this.state.rightOptionSelected){
            this.timer = setTimeout(() => { 
                this.clearSelection();
                this.props.onOption2Selected();
            }, 1000);            
        }
    }

    clearSelection(){
        this.setState({
            leftOptionSelected: false,
            rightOptionSelected: false
          });
    }

    render() {
        return (
            <Container className="p-3" onClick={this.handleLeftClick} onContextMenu={this.handleRightClick}>
                <Row>
                    <Col>{this.props.title}</Col>
                </Row>
                <Row>
                    <Col>
                        <Option imageUrl={this.props.option1Image} isSelected={this.state.leftOptionSelected} />
                    </Col>
                    <Col>
                        <Option imageUrl={this.props.option2Image} isSelected={this.state.rightOptionSelected}/>
                    </Col>
                </Row>
            </Container>
        );
    }
};

OptionContainer.propTypes = {
    title: PropTypes.string,
    option1Image: PropTypes.string,
    option2Image: PropTypes.string,
    onOption1Selected: PropTypes.func,
    onOption2Selected: PropTypes.func
};

export default OptionContainer;