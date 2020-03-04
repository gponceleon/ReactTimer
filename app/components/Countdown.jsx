const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm')
const Controls= require('Controls');

const Countdown = React.createClass({
    getInitialState: function(){
        return{
            count:0,
            coutdownStatus: 'stopped'
        };
    },
    componentWillUnmount:function(){
        clearInterval(this.timer);
        this.timer=undefined;
    },
    /*componentWillMount:function(){
        console.log('add')
    },
    componentDidMount:function(){
        console.log('componentDidMount')
    },
    componentWillUpdate:function(nextProps, nextState){
    },*/
    componentDidUpdate:function(prevProps, prevState){
        if(this.state.coutdownStatus!==prevState.coutdownStatus){
            switch(this.state.coutdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer=undefined;
                    break;
            }  
        }
    },
    startTimer: function(){
        this.timer=setInterval(()=>{
            let newCount = this.state.count-1;
            this.setState({
                count: newCount<=0 ? 0 : newCount
            });
            if(newCount === 0){
                this.setState({coutdownStatus:'stopped'})
            }
        },1000)
    },
    handleSetCountdown: function(seconds){
        this.setState({
            count: seconds,
            coutdownStatus: 'started'
        })
    },
    handleOnStatusChange: function(newStatus){
        this.setState({
            coutdownStatus: newStatus
        })
    },
    render: function(){
        const {count,coutdownStatus} = this.state;
        
        const renderControlArea = ()=>{
            if(coutdownStatus!=='stopped'){
                return <Controls coutdownStatus={coutdownStatus} onStatusChange={this.handleOnStatusChange}/>
            }else{
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        }

        return(<div>
            <h2 className="page-title">Countdown App</h2>
            <Clock totalSeconds={count}/>
            {renderControlArea()}
        </div>)
    }
});

module.exports=Countdown;