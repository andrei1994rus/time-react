import React from 'react';
import './time.css';
import App from '../App';

const dayMap=new Map([[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]);

class Time extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			date:"click button to turn on output time",
			text_button:"turn on",
			isRunning:this.props.isRunning
		};

		this.output=this.output.bind(this);
	}

	componentWillMount()
	{
		console.log("componentWillMount");
	}

	componentDidMount()
	{
		console.log("componentDidMount");
    }

	componentWillUpdate()
	{
		console.log("componentWillUpdate");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate");
	}

	render()
	{
		console.log("date:"+this.state.date);
		
		return(
			<div className="Time">
				<header className="Time-header">
		      		<div id="time">{this.state.date}</div>
		      		<button type="button" id="button" onClick={this.output}>
			      				{this.state.text_button}
			      	</button>
		      	</header>
		    </div>
		    );
	}

	output()
	{
		if(!this.state.isRunning)
		{
			this.interval=setInterval(()=>this.time(),1000);
		} 
		
		else
		{
			
			clearInterval(this.interval);
			this.setState(state=>(
			{
				date:"click button to turn on output time",
				text_button:"turn on",
				isRunning:!state.isRunning
			}));	
		}
	}

	time()
	{
		this.setState(
		{
			date:this.dateToString(new Date()),
			text_button:"turn off",
			isRunning:true
		});
	}

	dateToString(date)
	{
		return "current time:"+
		this.dayToString(date.getDay())+" "+this.necessaryAdd(date.getDate())+"."+
		this.necessaryAdd(date.getMonth())+"."+date.getFullYear()+" "+
		this.necessaryAdd(date.getHours())+":"+this.necessaryAdd(date.getMinutes())+":"+
		this.necessaryAdd(date.getSeconds());
	}

	dayToString(day)
	{
		return dayMap.get(day);
	}

	necessaryAdd(number)
	{
		return number<10 ? `0${number}` : number;
	}

}

export default Time;