import React, { Component } from 'react';
import './Footer.css';
import chengXinLogo from '../../images/chengxin_logo.png';
import tips from '../../images/tips.svg'
class Footer extends Component {
  render() {
    return (
      <div className="footer">
				<a href="javascript:void(0)">知乎专栏</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">知乎圆桌</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">发现</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">移动应用</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)" className="footer-mobile-show">联系我们</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">来知乎工作</a>
				<br />
				<span>© 2017 知乎</span>
				<span className="dot">·</span>
				<a href="javascript:void(0)">京 ICP 证 110745 号</a>
				<span className="dot">·</span>
				<span>京公网安备 11010802010035 号</span>
				<span className="dot">·</span>
				<a href="javascript:void(0)">出版物经营许可证</a>
				<br />
				<a href="javascript:void(0)">侵权举报</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">网上有害信息举报专区</a>
				<span className="dot">·</span>
				<a href="javascript:void(0)">儿童色情信息举报专区</a>
				<span className="dot">·</span>
				<span>违法和不良信息举报：010-82716601</span>
				<div className="chengxing">
					<a id="___szfw_logo___" href="javascript:void(0)">
						<img src={chengXinLogo}/>
					</a>
				</div>
				<button className="FeedbackButton-button-3waL">
				   <span className="FeedbackButton-icon-1Rgw"></span>
				</button>
			</div>
		);
  }
}

export default Footer;
