import React from 'react';

class Chrono extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			hour : "00",
			min : "00",
			sec : "00",
			isStart : false,
			cron : null
		}
		this.playClock = this.playClock.bind(this);
		this.startClock = this.startClock.bind(this);
		this.stop = this.stop.bind(this);
		this.pause = this.pause.bind(this);
	};
	playClock(){
		if(!this.state.isStart){
			this.state.isStart = true;
			this.startClock();
		}
	};
	startClock(){
		var that = this;
		this.state.cron = setInterval(function(){
			that.state.sec = parseInt(that.state.sec);
			that.state.sec++;
			if(that.state.sec < 60){
				if(that.state.sec < 10){
					that.state.sec = "0"+that.state.sec;
				}
			}
			else{
				that.state.sec = "00";
				that.state.min = parseInt(that.state.min);
				that.state.min++;
				if(that.state.min < 60){
					if(that.state.min < 10){
						that.state.min = "0" +that.state.min;
					}
				}
				else{
					that.state.min = "00";
					that.state.hour = parseInt(that.state.hour);
					that.state.hour++;
					if(that.state.hour<10){
						that.state.hour = "0"+that.state.hour;
					}
				}
			}
			that.setState(that.state);
		},1000);
		
	};
	stop(){
		this.state.sec = "00";
		this.state.min = "00";
		this.state.hour = "00";
		this.state.isStart = false;
		clearInterval(this.state.cron);
		this.setState(this.state);
	};
	pause(){
		clearInterval(this.state.cron);
		this.state.isStart = false;
		this.setState(this.state);
	};
   render() {
      	return ( 
		        <div className="col-md-6 offset-md-3 ">
		        	<div className="pt-5">
		        		<h1>React Chrono</h1>
		        	</div>
		        	<div className="col-md-4 col-md-offset-4">
	        			<div className="well">
	          				<div className="display text-center">
	            				<span>{this.state.hour}</span>:<span>{this.state.min}</span>:<span>{this.state.sec}</span>
	          				</div>
	        			</div>
	     
	        			<div className="btn-group btn-group-justified" role="group" aria-label="Justified button group">
	          				<button  className="btn btn-primary mr-2 px-2" onClick={this.playClock}>Play</button>
	          				<button className="btn btn-primary mr-2 px-2" onClick={this.pause}>Pause</button>
	          				<button className="btn btn-primary mr-2 px-2" onClick={this.stop}>Stop</button>
	        			</div>
		     		</div>
		    	</div>		
      	);
   	}
}
export default Chrono;