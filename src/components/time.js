import React from 'react';
import './time.css';

const dayMap=new Map([[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]);

class Time extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			date:this.dateToString(new Date())
		};
	}

	componentWillMount()
	{
		console.log("componentWillMount");
	}

	componentDidMount()
	{
		console.log("componentDidMount");
    	this.interval=setInterval(()=>this.time(),1000);
    }

	componentWillUpdate()
	{
		console.log("componentWillUpdate");
	}

	componentDidUpdate()
	{
		console.log("componentDidUpdate");
	}
	  
	componentWillUnmount() 
	{
		console.log("componentWillUnmount");
		clearInterval(this.interval);
	}

	render()
	{
		console.log("date:"+this.state.date);
		return(
			<div className="Time">
				<header className="Time-header">
		      		<p>{this.state.date}</p>
		      	</header>
		    </div>
		    );
	}

	time()
	{
		this.setState(
		{
			date:this.dateToString(new Date())
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