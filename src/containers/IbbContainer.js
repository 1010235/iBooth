import React, {Component} from 'react';

import {Ibb} from '../components';
import {getBeeperList, getBeeperNewList} from '../lib/toServer';

export default class IbbContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            newestList : [],
            currentList : {},
            currentIdx : 0,
        };

        this.setBeeperList = this.setBeeperList.bind(this);
        this.setNewBeeper = this.setNewBeeper.bind(this);
        this.notifyMe = this.notifyMe.bind(this);
        this.onNextMessage = this.onNextMessage.bind(this);
        this.nextIdx = this.nextIdx.bind(this);
    }
    componentDidMount(){
        this.setBeeperList();
        setInterval(this.setNewBeeper, 6000);
    }

    setBeeperList(){
        getBeeperList('1531679')
        .then((response) => {
            this.setState({
                newestList : response.data.slice(0, 5),
                currentList : response.data[0],
                currentIdx : 0,
            });
        })
        .catch((error) => console.log(error));
    }

    setNewBeeper(){

        getBeeperNewList('1531679')
        .then((response) => {
            if(response.data){
                response.data.forEach((item, index) => {
                    this.notifyMe(item);
                });
                this.setBeeperList();
            }
        });

    }

    notifyMe(data) {

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }else if (Notification.permission === "granted") {
            let notification = new Notification("삐삐", {body : data.number + "의 메시지 " + data.msg});
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission((permission) => {
                if (permission === "granted") {
                    let notification = new Notification("삐삐", {body : data.number + "의 메시지 " + data.msg});
                }
            });
        }
    }

    onNextMessage(e){

        e.preventDefault();
        let nextIdx = this.nextIdx(this.state.currentIdx);

        this.setState({
            currentIdx : nextIdx,
            currentList : this.state.newestList[nextIdx],
        });

    }

    nextIdx(idx){
        if (this.state.newestList.length-1 === idx){
            return 0;
        }else{
            return idx + 1;
        }
    }

    render(){
        return(
            <Ibb
                onNextMessage={this.onNextMessage}
                currentList={this.state.currentList}
            />
        );
    }
}
