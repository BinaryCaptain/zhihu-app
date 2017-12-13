import React, { Component } from 'react';
import './QRCode.css';

class QRCode extends Component {
	constructor(){
        super();
        this.state = {
            showQRCode: false,
            animationQRCode: ""

        };
        this.changeShowQRCode = this.changeShowQRCode.bind(this)
    }
    changeShowQRCode(){
    	
    	this.setState({
    		animationQRCode: this.state.showQRCode?" fadeOutDown":" fadeInUp",
    		showQRCode: !this.state.showQRCode
    	},()=>{});
    }
	render() {
		return (
			<div className="QRCode">
				<button className="QRCode-toggleButton" onClick={this.changeShowQRCode}>
					<span className="sprite-global-icon-qrcode"></span>
					<span className="QRCode-toggleButtonText">{this.state.showQRCode?"关闭二维码":"下载知乎 App"}</span>
				</button>
				<div className={"QRCode-card"+this.state.animationQRCode} style={this.state.showQRCode?{display:"block"}:{display:"none"}}>
					<div className="QRCode-image"></div>
					<div className="sprite-index-icon-arrow"></div>
				</div>
			</div>
			
		);
	}
	
}

export default QRCode;