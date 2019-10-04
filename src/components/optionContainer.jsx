import React from 'react';
import PropTypes from 'prop-types';
import Option from './option'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class OptionContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            leftOptionSelected: false,
            rightOptionSelected: false
          };

        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }

    handleLeftClick(e) {
        console.log('Left click');
        this.setState({
            leftOptionSelected: true,
            rightOptionSelected: false
          });
    }

    handleRightClick(e) {
        e.preventDefault();
        console.log('Right click');
        this.setState({
            leftOptionSelected: false,
            rightOptionSelected: true
          });
    }

    render() {
        return (
            <Container className="p-3" onClick={this.handleLeftClick} onContextMenu={this.handleRightClick}>
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
    option1Image: PropTypes.string,
    option2Image: PropTypes.string,
    option1Link: PropTypes.string,
    option2Link: PropTypes.string
};

export default OptionContainer;