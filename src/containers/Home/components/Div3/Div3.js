import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import config from '../../../../config';


@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div3 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    constructor() {
      super();
      this.state = {
        isShow: 'false'
      };
    }

    videoCon() {
      if (this.state.isShow === 'true') {
        this.setState({
          isShow: 'false'
        });
        this.refs.video.pause();
      } else {
        this.setState({
          isShow: 'true'
        });
        this.refs.video.play();
      }
    }

    render() {
      const {language} = this.props;
      const styles = require('./Div3.scss');

      const videpIco = require('../../image/videoIco.png');
      const wanchain = require('../../image/wanchain.png');
      const one = require('../../image/1.png');
      const two = require('../../image/2.png');
      const download = require('../../image/download.png');
      const widthPic = {width: '40px'};
      const downLoad = {width: '29px', padding: '0', margin: '6px'};
      var isShow = this.state.isShow;

      let pValue;
      if (language === 'zn') {
        pValue = '万维链旨在建立一个基础设施--能够以去中心化的方式完成不同区块链网络的连接及价值的交换';
      } else {
        pValue = 'A distributed financial infrastructure that seamlessly connects blockchain networks together';
      }

      return (
        <div className={styles.comBgWhite}>
          <div className={styles.div2Header + ' container'}>
              {language === 'zn' ?
                  <h2><hr className={styles.div1HeaderImg}/>万维链整体架构<hr className={styles.div1HeaderImg}/></h2>
              :
                  <h2 className={styles.h2En}><hr className={styles.div1HeaderImg}/>WANCHAIN ARCHITECTURE<hr className={styles.div1HeaderImg}/></h2>
              }
              <p>{pValue}</p>
              <div className={styles.astroModule2}>
                  <img src={wanchain} className={styles.astroModule2Img} id="astroModule2Img"/>
                  <div className= {styles.astroModule2word + ' col-lg-4'}>
                      <div className={ language === 'zn' ? styles.astroModule2wordDiv : styles.astroModule2wordDivEn}>
                          <img src={one} style={widthPic} />
                          {language === 'zn' ?
                              <p>万维链不仅仅是一个<small>通用的跨链协议<br/></small>同时是一个记录跨链交易、链内交易的<small>分布式账本</small></p>
                          :
                              <p>Wanchain is not merely a universal cross-chain protocol, it is a distributed ledger that records cross-chain and intra-chain transactions</p>
                          }
                      </div>
                      <div className={ language === 'zn' ? styles.astroModule2wordDiv : styles.astroModule2wordDivEn}>
                          <img src={two} style={widthPic} />
                          {language === 'zn' ?
                              <p>这个账本不但支持<small>智能合约虚拟机<br/></small>而且能支持智能合约下的<small>交易隐私保护</small></p>
                              :
                              <p>The ledger not only supports <span>smart contracts,</span> but also supports <span>privacy protection</span></p>
                          }
                      </div>


                        <div id="link" onClick={this.videoCon.bind(this)} className={styles.videoBtn}>
                            <span>WATCH VIDEO</span>
                            <img src={videpIco} className={styles.videpIco} />
                        </div>
                        <div className={styles.videoPopul} id="bg" style={{ display: isShow === 'true' ? 'block' : 'none' }}>
                          <div className={styles.videoshade} onClick={this.videoCon.bind(this)}></div>
                          <div>
                              <video ref="video" width="750px" className={styles.videoBox} src={config.app.files.wanIntro} controls preload></video>
                          </div>
                        </div>

                  </div>
              </div>
          </div>
          </div>
      );
    }
}

export default Div3;
