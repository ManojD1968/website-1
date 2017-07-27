import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import mark from '../../../../image/mark.png'

class Div1 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="container crowd-div1Header">
                {language === 'zn' &&
                <h2> <hr className="crowd-div1HeaderImg"/>公开销售计划<hr className="crowd-div1HeaderImg"/></h2>
                }

                {language === 'en' &&
                <h2> <hr className="crowd-div1HeaderImg"/>公开销售计划<hr className="crowd-div1HeaderImg"/></h2>
                }

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>第一阶段</td>
                        <td>1 ETH : <span>400</span> wancoin</td>
                        <td>2017 09-23 12:00 -- 09-19 12:00 <small>UTC</small></td>
                    </tr>
                    <tr>
                        <td>第二阶段</td>
                        <td>1 ETH : <span>450</span> wancoin</td>
                        <td>2017 09-23 12:00 -- 09-19 12:00 <small>UTC</small></td>
                    </tr>
                    <tr>
                        <td>第三阶段</td>
                        <td>1 ETH : <span>600</span> wancoin</td>
                        <td>2017 09-23 12:00 -- 09-19 12:00 <small>UTC</small></td>
                    </tr>
                    </tbody>
                </table>

                <div className="crowd-div1HeaderDiv">
                    <h4><img src={mark}/>说明:</h4>
                    <p>
                        当1亿个token销售完毕或者众筹时间结束智能合约将自动关闭。<br/>
                        每笔交易的最小购买额度为0.1ETH，最大ETH账号的最大购买额度为100ETH。<br/>
                        众筹结束后，智能合约将分配token到每个众筹地址，这些token可以通过以太坊钱包进行转账。<br/>
                        项目上线时，用户根据所持token的份额等比例兑换为万维链原生币 wancoin，1.0版本的预计上线日期为2017年11月
                    </p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Div1)


// <img src={line} className="div1HeaderImg" />