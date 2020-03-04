const React=require('react');
const Clock = require('Clock');
const Controls=require('Controls');

const Timer = React.createClass({
    getInitialState: function(){
        return{
            count:0,
            timerStatus: 'stopped'
        };
    },
    handleStatusChange: function(newTimerStatus){
        this.setState({
            timerStatus: newTimerStatus
        });
    },
    handleStart: function(){
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    },
    componentDidUpdate: function(prevProps, prevState){
        if(prevState.timerStatus!==this.state.timerStatus){
            switch(this.state.timerStatus){
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer=undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    render: function(){

        const {count, timerStatus} = this.state;
        return(<div>
            <h2 className="page-title">Timer App</h2>
            <Clock totalSeconds={count}/>
            <Controls coutdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        </div>)
    }
});

module.exports=Timer;