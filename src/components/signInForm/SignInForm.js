import React, { Component } from 'react';


class SignInForm extends Component {
	constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            emailError:"",
            passError:""
        };
    }


    checkEmail = (e) =>{
        var email = this.state.email;
        var error = '';
        if(email == null || email == "") {
            error = '请输入正确的邮箱';
        }
        this.setState({
            emailError: error
        });
    }

    checkPassword = (e) => {
        var password = this.state.password;
        var error = '';
        if(password == null || password == "") {
            error = '请输入密码';
        }
        this.setState({
            passError: error
        });
    }

    handleInputChange = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: e.target.value
                }, ()=>{
                    this.checkEmail();
                });
            break;
            case 'password':
                this.setState({
                    password: e.target.value
                },()=>{
                    this.checkPassword();
                });
            break;
        }
    }


    handleSubmit = (e)=> {
        e.preventDefault();
        this.checkEmail();
        this.checkPassword();
    }

	render() {
		return (
			<form>
                <div className="group-inputs">
                    <div className="account input-wrapper">
                        <input type="text" name="account" placeholder="手机号或邮箱" 
                            value={ this.state.email }
                            onChange={ this.handleInputChange.bind(this,'email') }/>
                        <span className={this.state.emailError ? "warning fadeInUp": "warning" +" "+"fadeOutDown"} 
                            style={this.state.emailError ?{display:"block"}:{display:"none"}}>{ this.state.emailError }</span>
                    </div>
                    <div className="verification input-wrapper">
                        <input type="password" name="password" placeholder="密码" 
                            value={ this.state.password }
                            onChange={ this.handleInputChange.bind(this,'password') }/>
                        <span className={this.state.passError ? "warning fadeInUp": "warning" +" "+"fadeOutDown"} 
                            style={this.state.passError ?{display:"block"}:{display:"none"}}>{ this.state.passError }</span>
                    </div>
                    
                </div>
                <div className="button-wrapper command">
                    <button className="sign-button submit" type="submit" onClick={ this.handleSubmit } >登录</button>
                </div>
                
            </form>
		);
	}
	
}

export default SignInForm;