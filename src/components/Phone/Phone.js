import React, {PureComponent} from 'react';

import Button from './Button';
import './style.css';
import './mobileStyle.css';
import './desktopStyle.css';

export default class Phone extends PureComponent{


    render(){
        return(
        <div>
            <div className="lightbox-blanket">
                <div className="pop-up-container">
                    <div className="pop-up-container-vertical">
                        <div className="pop-up-wrapper">
                            <div className="phone-wrapper">
                                <div className="phone-pad">
                                    <div className="phone-top-bar">
                                        <i className="fa fa-circle-o"></i>
                                        <i className="fa fa-circle-o"></i>
                                        <i className="fa fa-circle-o"></i>
                                        <i className="fa fa-circle-o"></i>
                                        <i className="fa fa-circle-o"></i>
                                        <i className="fa fa-circle-o"></i>

                                    </div>
                                    <div className="phone-pad-input-panel">
                                        <div className="phone-pad-input-text">
                                            <input id="number-input" type="tel" readOnly="readonly" value={this.props.phoneNumberToSend}/>
                                        </div>
                                    </div>
                                    <div className="phone-pad-input-numbers">
                                    {this.props.buttonList.map((item, index) => {
                                        return (<Button
                                            key={index}
                                            item={item}
                                            onClick={this.props.onClick}
                                        />)
                                    })}
                                    </div>
                                    <div className="phone-pad-input-call" onClick={this.props.onSubmit}>
                                        <i className="fa fa-circle-o"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
