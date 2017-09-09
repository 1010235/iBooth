import React, {PureComponent} from 'react';

import './style.css';
import './mobileStyle.css';
import './desktopStyle.css';

export default class Phone extends PureComponent{


    render(){

        let resultText = this.props.currentList.msg;
        return(
        <div>
            <div className="lightbox-blanket_ibb">
                <div className="pop-up-container_ibb">
                    <div className="pop-up-container-vertical_ibb">
                        <div className="pop-up-wrapper_ibb">
                            <div className="phone-wrapper_ibb">
                                <div className="phone-pad_ibb">
                                    <div className="phone-pad-input-panel_ibb">
                                        <div className="phone-pad-input-text_ibb">
                                            <div className="phone-bb-title_ibb">iBB</div>
                                            <input id="number-input_ibb" type="tel" readOnly="readonly" value={resultText}/>
                                            <div className="phone-btn_ibb" onClick={this.props.onNextMessage}>
                                                <i className="fa fa-square-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
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
