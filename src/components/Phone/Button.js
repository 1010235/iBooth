import React, {PureComponent} from 'react';

export default class Button extends PureComponent{

    render(){
        return(
            <div className="phone-pad-input-number" onClick={(e) => {
                if (this.props.item === 1) {
                    this.props.onClick(e, ` ${this.props.item}`);
                    return;
                }
                this.props.onClick(e, this.props.item);
            }}>
                <div className="input-number">
                    <div className="number">
                        {this.props.item}<span></span>
                    </div>
                </div>
            </div>
        );
    }
}
