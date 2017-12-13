import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import LoginIn from "../../components/loginIn/LoginIn"
import SignUp from "../../components/signUp/SignUp"
import './Tab.css';

class Tab extends Component {
	constructor(props){
        super(props);
        this.state = {
        	shownIndex: 0 		//0:注册，1:登录
        };
        this.handleChangeTab = this.handleChangeTab.bind(this) 
    }
    componentDidUpdate(){

    }
	handleChangeTab(index){
		
		this.setState({
			shownIndex: index
		});
		
	}
	render() {
		return (
			<div className="sign-flow clearfix">
				<Nav handleChangeTab={ this.handleChangeTab } shownIndex={ this.state.shownIndex } />
				<SignUp  shownIndex={ this.state.shownIndex } />
				<LoginIn shownIndex={ this.state.shownIndex } />
			</div>
		);
	}
	
}

export default Tab;