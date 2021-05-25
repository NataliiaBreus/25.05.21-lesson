import React, { Component } from 'react'

class Timer extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isRunning: false,
            startTime: null,
            diff: null,
        };

    }
    tick = () =>{

    }
    start = () => {
        const{isRunning, startTime} = this.state;
        if (isRunning || startTime) return;
        this.setState({
            isRunning: true,
            startTime: Date.now()
        })
    };

    stop = ()=> {

    };


    reset = () => {

    };

    resume = () => {

    };

    render(){
        const {name = "Timer"} = this.props;
        return (

            <article className = "timer">
                <h2>{name}</h2>
                <Controls>
                    <Button handler ={()=>{}} caption = {"test"}/>
                </Controls>
            </article>
        )
    }
}
export default Timer;