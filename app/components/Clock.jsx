const React = require('react');

const Clock = React.createClass({
    getDefaultProps: function(){
        totalSeconds: 0
    },
    propTypes:{
        totalSeconds: React.PropTypes.number
    },
    formatSeconds:function(totalSeconds){
        let seconds=totalSeconds%60;
        let minutes=Math.floor(totalSeconds/60);

        minutes = minutes<10 ? `0${minutes}` : minutes;
        seconds = seconds<10 ? `0${seconds}` : seconds;
        
        return `${minutes}:${seconds}`
    },
    render: function(){
        const {totalSeconds} = this.props;
        return(
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        )
    }
});

module.exports = Clock;