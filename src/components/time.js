import React from 'react';
import './time.css';

import dateToString from '../functions/dateToString';

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

	componentWillMount=()=>
	{
		console.log("componentWillMount");
	}

	componentDidMount=()=>
	{
		console.log("componentDidMount");
    }

	componentWillUpdate=()=>
	{
		console.log("componentWillUpdate");
	}

	componentDidUpdate=()=>
	{
		console.log("componentDidUpdate");
	}

	render=()=>
	{
		const {date,text_button}=this.state;
		console.log("date:"+date);
		
		return(
			<div className="Time">
				<header className="Time-header">
		      		<div id="time">{date}</div>
					<div className="button">
					<button type="button" onClick={this.output}>
			      		{text_button}
			      	</button>
					</div>
		      	</header>
		    </div>
		);
	}

	output=()=>
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

	time=()=>
	{
		this.setState(
		{
			date:dateToString(new Date(),dayMap),
			text_button:"turn off",
			isRunning:true
		});
	}
}

export default Time;