import React, { Component } from 'react';
import QRCode from '../../components/qrCode/QRCode';
import SignInForm from '../../components/signInForm/SignInForm';
import TelSignInForm from '../../components/telSignInForm/TelSignInForm';
import ModalBox from '../../components/modalBox/ModalBox';
import './LoginIn.css';
import QRCodeImg from '../../images/qr-code2.png'

class LoginIn extends Component {
	constructor(props){
        super(props);
        this.state = {
            shownIndex: this.props.shownIndex,
            isSnsShown:false,
            showFormIndex:0,			//0:默认密码登录；1:手机验证码登录
            isQrcodeShown:true,
            isModalShown:false
        };
        this.changeModalShown = this.changeModalShown.bind(this)
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
            shownIndex: nextProps.shownIndex
        });
    }
    changeSnsvisibility(){
        this.setState({
            isSnsShown: !this.state.isSnsShown
        });
    }
    changeQrcodeShown(){
    	this.setState({
            isQrcodeShown: !this.state.isQrcodeShown
        });
    }
    changeShowFormIndex(){
    	this.setState({
            showFormIndex: !this.state.showFormIndex
        });
    }
    changeModalShown(){
    	this.setState({
            isModalShown: !this.state.isModalShown
        });
    }

	render() {
		let formElem = null;
		let signinMisc = null;
		let modalElem = null;
		let modalBgElem = null;
		
		if(!this.state.isQrcodeShown){
			if(this.state.showFormIndex == 0){
				formElem = <SignInForm />;
				signinMisc = (
					<div className="signin-misc-wrapper clearfix">
	                    <button type="button" className="signin-switch-button" onClick={()=>this.changeShowFormIndex()}>手机验证码登录</button>
	                    <a className="unable-login" onClick={()=>this.changeModalShown()} href="#">无法登录？</a>
	                </div>
	            );
	            if(this.state.isModalShown){
	           
					modalElem = <ModalBox changeModalShownHandler={()=>this.changeModalShown()} />
					modalBgElem = <div className="mutiview-dialog-bg show"></div>
	            }else{
	            	modalElem = null;
	            	modalBgElem = null;
	            }
		    	
			}else{
				formElem = <TelSignInForm />
				signinMisc = (
					<div className="signin-misc-wrapper clearfix">
	                    <button type="button" className="signin-switch-button" onClick={()=>this.changeShowFormIndex()}>密码登录（手机号或邮箱）</button>
	                </div>
	            );
			}
		}else{
			formElem = null;
			signinMisc = null;
		}
		
    	
		
		return (
			<div className="view view-signin" style={this.state.shownIndex == 1?{display:"block"}:{display:"none"}}>
				{formElem}
				{signinMisc}
                <div className="other-signup-wrapper" style={this.state.isQrcodeShown?{display:"none"}:{display:"block"}}>
                    <span className="name" onClick={()=>this.changeQrcodeShown()}>二维码登录</span>
                     
                    <span className="signup-footer-separate signup-footer-se"> · </span>
                     
                    <span className="name signup-social-buttons js-toggle-sns-buttons" onClick={()=>this.changeSnsvisibility()}>社交帐号登录</span>
             
                    <div className={this.state.isSnsShown?"sns-buttons is-visible":"sns-buttons"} style={this.state.isSnsShown?{visibility: "visible"}:{visibility: "hidden"}}>
                        <a title="微信登录" className="js-bindwechat" href="#"><i className="sprite-index-icon-wechat"></i></a>
                         
                        <a title="微博登录" className="js-bindweibo" href="#"><i className="sprite-index-icon-weibo"></i></a>
                         
                        <a title="QQ 登录" className="js-bindqq" href="#"><i className="sprite-index-icon-qq"></i></a>
             
                    </div>
                </div>
				
				<div className="qrcode-signin-container" style={this.state.isQrcodeShown?{display:"block"}:{display:"none"}}>
					<div className="step1">
						<div className="img-wrapper">
							<img src={QRCodeImg}/>
						</div>
						<p>打开最新 <a href="https://www.zhihu.com/app/" target="_blank">知乎 App</a></p>

						<p>在「更多」页面右上角打开扫一扫</p>
						<div className="cut-button">
							<span onClick={(e)=>this.changeQrcodeShown(e)}>使用密码登录</span>
						</div>
					</div>
					<div className="step2">
						<div className="scan-status"></div>
						<p className="scan-tips">扫描成功</p>
						<p>请在手机上「确认登录」</p>
						<div className="cut-button">
							<span>返回二维码</span>
						</div>
					</div>
					<div className="failure">
						<div className="icon"></div>
						<p className="message"></p>
						<div className="cut-button">
							<span>使用密码登录</span>
						</div>
					</div>
					<div className="guide"></div>
				</div>
				<QRCode />
				{modalElem}
				{modalBgElem}
			</div>
		);
	}
	
}

export default LoginIn;