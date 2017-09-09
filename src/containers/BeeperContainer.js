import React, { Component } from 'react';

import {Phone} from '../components';
import {sendBeep} from '../lib/toServer';

export default class BeeperContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            buttonList : [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
            phoneNumberToSend : "number",
            numberCount: 0
        };

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){

    }

    onClick(e, item){
        e.preventDefault();
        if (this.state.numberCount === 20) return;

        this.setState(ps => ({
            phoneNumberToSend : !ps.numberCount ?
              `${item}` : ps.phoneNumberToSend + (item === 1 ? ` ${item}` : `${item}`),
            numberCount: ps.numberCount + 1
          }), () => {
          if (this.state.numberCount > 7)
            document.querySelector('#number-input').scrollLeft = 10000;
        });
    }

    onSubmit(){
        let phoneToSend = this.state.phoneNumberToSend.replace(/\s/g, "");

        sendBeep(phoneToSend)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

    }

    render(){
        return(
            <Phone
                buttonList={this.state.buttonList}
                phoneNumberToSend={this.state.phoneNumberToSend}
                onClick={this.onClick}
                onSubmit={this.onSubmit}
            />
        );
    }
}
