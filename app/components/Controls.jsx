const React = require('react');

const Controls=React.createClass({
    propTypes:{
        coutdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus){
        return () =>{
            this.props.onStatusChange(newStatus);
        }
    },
    render:function(){
        const {coutdownStatus} = this.props;
        let renderStartButton=()=>{
            if(coutdownStatus==='started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }else{
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return(<div className="controls">
            {renderStartButton()}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>)
    }
});

module.exports = Controls;