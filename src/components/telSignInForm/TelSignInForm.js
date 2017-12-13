import React, { Component } from 'react';


class TelSignInForm extends Component {
	constructor(props){
        super(props);
        this.state = {  
            telephone:"",
            teleError:"",
            count:60,
            status:true
        };
    }

    checkTelephone = (e) =>{
        var telephone = this.state.telephone;
        var error = '';
        if(telephone == null || telephone == "") {
            error = '请输入正确的手机号';
        }
        this.setState({
            teleError: error
        });
        return false;
    }

    handleInputChange = (type, e) =>{
        switch (type) {
            case 'telephone':
                this.setState({
                    telephone: e.target.value
                }, ()=>{
                    this.checkTelephone();
                });
            break;
        }
    }

    getSecurityCode = () =>{
        if(this.state.status){
            this.timer = setInterval(function () { //平均1秒执行一次
            var count = this.state.count; //验证码时间间隔
            this.state.status = false;
            count -= 1;
            if (count < 1) {
                this.setState({
                status: true  //重新赋值状态
                });
                count = 60;
                clearInterval(this.timer);
            }
            this.setState({
              count: count 
            });
          }.bind(this), 1000);
        }
    }

    handleSubmit = () =>{
        this.checkTelephone();
    }

    handleSecurityCode = () =>{
        this.checkTelephone();
        if(this.state.telephone == null || this.state.telephone == "" ){
            return false;
        }

        this.getSecurityCode();
    }

	render() {
        let text = this.state.status ? '获取验证码' : this.state.count + '秒后重发';
		return (
			<form>
                <div className="group-inputs">
                    <div className="account input-wrapper">
                        <input type="tel" name="account" placeholder="手机号" value={ this.state.telephone }  
                        onChange={ this.handleInputChange.bind(this, 'telephone') } />
                        <span className={this.state.teleError ? "warning fadeInUp": "warning" +" "+"fadeOutDown"} 
                        style={ this.state.teleError ?{ display:"block" }:{ display:"none" }}>{ this.state.teleError }</span>
                    </div>
                    <div className="verification input-wrapper">
                        <input type="number" name="verification_code" placeholder="短信验证码"  />
                        <button type="button" className="send-code-button" 
                        onClick={ this.handleSecurityCode } >{text}</button>
                    </div>
                    
                </div>
                <div className="button-wrapper command">
                    <button className="sign-button submit" type="submit" onClick={ this.handleSubmit }>登录</button>
                </div>
            </form>
		);
	}
	
}

export default TelSignInForm;