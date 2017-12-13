import React, { Component } from 'react';
import './ModalBox.css';

class ModalBox extends Component {
	constructor(props){
        super(props);
        this.state = {
            telephone:""
        };
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
            
        });
    }
    changeModalShown(){
        this.props.changeModalShownHandler();
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


	render() {
		return (
    		<div className="modal-wrapper flexbox">

                <div className="mutiview-dialog SignFlow unable-login show" role="dialog">
                    <div className="mutiview-dialog-title">
                        <div className="title start">
                            <h1>无法登录</h1>
                            <h2>我们提供两种方式帮助你重新登录知乎</h2>
                        </div>
                        <div className="title reset-password-verification right">
                            <h1>找回密码</h1>
                            <h2>验证码将会发送至你的注册邮箱或手机</h2>
                        </div>
                        <div className="title reset-password right">
                            <h1>重设密码</h1>
                            <h2>验证码将会发送至你的注册邮箱或手机</h2>
                        </div>
                        <div className="title sms-login-verification right">
                            <h1>登录知乎</h1>
                            <h2>验证码将会发送至你的手机</h2>
                        </div>
                        <div className="title sms-login right">
                            <h1>登录知乎</h1>
                            <h2>输入你收到的 6 位数短信验证码</h2>
                        </div>
                        <span className="mutiview-dialog-title-close z-ico-close" role="button" onClick={()=>this.changeModalShown()} ></span>
                        <span className="mutiview-dialog-title-back z-ico-left"></span>
                    </div>
                    <div className="mutiview-dialog-content">
                        <div className="view start">
                            <button className="blue-button reset-password">找回密码</button>
                            <a className="blue-button blue-button--link" href="#" target="_blank">人工申诉</a>
                        </div>
                        <div className="view reset-password-verification right">
                            <form>
                                <div className="input-wrapper">
                                    <input type="text" name="account" className="account" placeholder="手机号或邮箱" />
                                </div>
                                <div className="input-wrapper captcha-module">
                                    <input id="captcha" name="captcha" placeholder="验证码" required="" />
                                    <div className="captcha-container">
                                        <img className="js-refreshCaptcha captcha" width="120" height="30" alt="验证码" />
                                    </div>
                                </div>
                                <div className="submit-wrapper">
                                    <button className="submit blue-button" onClick>获取验证码</button>
                                </div>
                            </form>
                        </div>

                        <div className="view reset-password right">
                            <form>
                                <div className="input-wrapper">
                                    <input type="text" name="account" className="account" placeholder="手机号或邮箱" />
                                </div>
                                <div className="input-wrapper toggle-password">
                                    <input type="password" hidden="" /> 
                                    <input type="password" name="password" aria-label="新密码" placeholder="新密码"  />
                                    <span className="z-ico-show-password"></span>
                                </div>
                                <div className="input-wrapper verification-code">
                                    <input type="text" name="verification_code" placeholder="邮箱收到的 6 位数验证码" />
                                    <button type="button" className="send-code disabled">60 秒后重发</button>
                                </div>
                                <div className="submit-wrapper">
                                    <button className="submit blue-button">重设密码</button>
                                </div>
                            </form>
                        </div>

                        <div className="view sms-login-verification right">
                            <form >
                                <div className="input-wrapper">
                                    <input type="text" name="phone_num" placeholder="手机号" 
                                            value={ this.state.telephone }  

                                    />
                                </div>
                                <div className="input-wrapper captcha-module">
                                    <input id="captcha" name="captcha" placeholder="验证码" />
                                    <div className="captcha-container">
                                        <img className="js-refreshCaptcha captcha" width="120" height="30" alt="验证码" />
                                    </div>
                                </div>
                                <div className="submit-wrapper">
                                    <button className="submit blue-button" onClick = { this.checkTelephone }>获取验证码</button>
                                </div>
                            </form>
                        </div>

                        <div className="view sms-login right">
                            <form>
                                <div className="input-wrapper">
                                    <input type="text" name="phone_num" placeholder="手机号"/>
                                </div>
                                <div className="input-wrapper verification-code">
                                    <input type="text" name="verification_code" placeholder="6 位数验证码" />
                                    <button type="button" className="send-code disabled">60 秒后重发</button>
                                </div>
                                <div className="submit-wrapper">
                                    <button className="submit blue-button">登录知乎</button>
                                </div>
                            </form>
                        </div>
                    </div>
                <div className="mutiview-dialog-buttons" style={{display: "none"}}></div>
            </div>

        </div>
		);
	}
	
}


export default ModalBox;