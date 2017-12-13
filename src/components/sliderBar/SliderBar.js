import React, { Component } from 'react';
import './SliderBar.css';

class SliderBar extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex
        };
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
            shownIndex: nextProps.shownIndex
        });
    }
	render() {
		return (
			<span className="navs-slider-bar" style={this.state.shownIndex==0?{left:"0em"}:{left:"4em"}}></span>
		);
	}
	
}

export default SliderBar;