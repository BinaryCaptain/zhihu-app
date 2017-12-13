import React, { Component } from 'react';
import QRCode from '../../components/qrCode/QRCode';
import './SignUp.css';


class SignUp extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex,
            showQRCode: false,
            name: "",
            telephone: "",
            passwo: "",
            email:"",
            confirmPassword:"",
            registerStatus:0,
            nameError:"",
            teleError:"",
            emailError:"",
            confirmPasswordError:"",
            showWarning:false,
            animationWarning:""
        };
    }

    //Lifecycle Hooks
    componentWillReceiveProps(nextProps){
    	this.setState({
            shownIndex: nextProps.shownIndex
        });
    }

    //Check Func
    checkName = (e) =>{
        var name = this.state.name;
        var error = '';
        if(name == null || name == "") {
            error = '请输入正确的名字';
        }
        this.setState({
            nameError: error
        });
    }

    checkTelephone = (e) =>{
        var telephone = this.state.telephone;
        var error = '';
        if(telephone == null || telephone == "") {
            error = '请输入电话号码';
        }
        this.setState({
            teleError: error
        });
    }

    checkPassword = (e) => {
        var password = this.state.passwo;
        var error = '';
        if(password == null || password == "") {
            error = '请输入密码';
        }
        this.setState({
            passError: error
        });
    }

    //Handler Func
    handleInputChange = (type, e) => {
        switch (type) {
            case 'name':
                this.setState({
                    name: e.target.value
                }, ()=>{
                    this.checkName(); //异步调用，这里是异步的，获取到值之后再进行检测
                });
            break;
            case 'telephone':
                this.setState({
                    telephone: e.target.value
                },()=>{
                    this.checkTelephone();  
                });
            break;
            case 'passwo':
                this.setState({
                    passwo: e.target.value
                },()=>{
                    this.checkPassword();
                });
            break;
        }
    }
    
   
    handleSubmit = (e)=>{
        e.preventDefault();
        this.checkName();
        this.checkTelephone();
        this.checkPassword();
    }

	render() {
		// console.log(this.state.shownIndex);
		return (
			<div className="view view-signup" style={ this.state.shownIndex == 0 ? { display:"block" }:{ display:"none" }}>

				<form className="zu-side-login-box" id="sign-form-1">
				
					<div className="group-inputs">
						<div className="name input-wrapper">
							<input type="text" name="fullname" placeholder="姓名" 
                                value={ this.state.name } 
                                onChange = { this.handleInputChange.bind(this, 'name') }/> 
                            <span className={this.state.nameError ? "warning fadeInUp": "warning" +" "+"fadeOutDown"} 
                            style={this.state.nameError ?{display:"block"}:{display:"none"}}>{ this.state.nameError }</span>
						</div>
						<div className="email input-wrapper">
							<input type="text" className="account" name="phone_num" placeholder="手机号" 
                                value={ this.state.telephone } 
                                onChange={ this.handleInputChange.bind(this,'telephone') }/>
                            <span className={ this.state.teleError ? "warning" + " " + "fadeInUp":"warning" +" "+"fadeOutDown"} 
                            style={this.state.teleError ?{display:"block"}:{display:"none"}}>{ this.state.teleError }</span> 
						</div>
						<div className="input-wrapper">
							<input type="password" name="password" placeholder="密码（不少于 6 位）" 
                                value = { this.state.passwo } 
                                onChange = { this.handleInputChange.bind(this,'passwo') } />
                            <span className={ this.passError ? "warning" + " " + "fadeOutDown" : "warning" +" "+"fadeInUp" } 
                            style={this.state.passError ?{display:"block"}:{display:"none"}}>{ this.state.passError }</span>
						</div>
					</div>
					<div className="button-wrapper command">
						<button className="sign-button" type="submit" onClick={ this.handleSubmit }>注册知乎</button>
					</div>
				</form>
				<p className="agreement-tip">点击「注册」按钮，即代表你同意<a href="#">《知乎协议》</a></p>
				<a className="signup-entry--org" href="#">注册机构号</a>
				<QRCode />
			</div>
		);
	}
}


export default SignUp;

