import React, {Component} from 'react';

import {Phone} from '../components';

export default class BeeperContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            buttonList : [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
            phoneNumberToSend : "",
        };

        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){

    }

    onClick(e, item){
        e.preventDefault();
        this.setState({
            phoneNumberToSend : this.state.phoneNumberToSend + item,
        });
    }

    onSubmit(){
        console.log(this.state.phoneNumberToSend);
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
