import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Div1 from './components/div/Div1';
import Div2 from './components/div/Div2';
import Div3 from './components/div/Div3';
import Div4 from './components/div/Div4';


import './Crowdsale.scss';

class Crowdsale extends Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language, clientWidth} = this.props;
        const blog1 = require('../../image/crowdLogo.jpg');
        const corwdLogo = require('../../image/corwdLogo.png');
        const cor2 = require('../../image/crowdsale.jpg');
        const num = require('../../image/crowdNum.png');
        return (
            <div className="crowdsaleDiv">
                {language === 'zn' &&
                <div className="crowdsaleHeader">
                    {Number(clientWidth) > 767 &&
                    <img src={blog1} className="crowdsaleHeaderDivImg" style={{width: '100%'}}/>}
                    {Number(clientWidth) <= 767 &&
                    <img src={cor2} className="crowdsaleHeaderDivImg" style={{width: '100%'}}/>}
                    {Number(clientWidth) <= 767 &&
                    <img src={num} style={{position: 'relative', top: '-80px', width: '100%'}}/>
                    }
                    <div className="crowdsaleHeaderDiv">
                        <h2><img src={corwdLogo}/>万维链代币分配</h2>
                        <p>万维链代币（万币Wancoin）总量为2.1亿个，ICO预期目标为3000万美元等值的以太币，公开销售的代币以万维链ERC-20 tokens进行，<br/>最终上线的代币与ICO token比例为1:1<br/>
                        公开销售开始日期为2017年9月06日 12:00 UTC</p>
                    </div>
                </div>
                }
                {language === 'zn' && <Div1/>}
                {language === 'zn' && <Div2/>}
                {language === 'zn' && <Div3/>}
                {language === 'zn' && <Div4/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Crowdsale)
