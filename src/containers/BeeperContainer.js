import React, {Component} from 'react';

import {Phone} from '../components';

export default class BeeperContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            buttonList : [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
            phoneNumberToSend : "",
            numberCounter: 0
        };

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){

    }

    onClick(e, item){
        e.preventDefault();

        if (this.state.numberCounter === 20) return;
        this.setState(ps => ({
            phoneNumberToSend : this.state.phoneNumberToSend + (item === 1 ? ` ${item}` : item),
            numberCounter: ps.numberCounter + 1
        }), () => {
          if (this.state.numberCounter > 7)
            document.querySelector('#number-input').scrollLeft = 10000;
        });
    }

    onSubmit(){
        console.log(this.state.numberCounter);
        console.log(this.state.phoneNumberToSend.replace(/\s/g, ""));
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
