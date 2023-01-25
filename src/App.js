import './App.css';
import React from 'react';
import Time from './components/time';


class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state=
		{
			isRunning:false
		};

	}

	render=()=>
	{
		const {isRunning}=this.state;
		return(
			<div className="App">
			    <header className="App-header">
					Welcome to site!
					<hr/>
				</header>
				<Time isRunning={isRunning}/>
	    	</div>
    	);
	}
}

export default App;
