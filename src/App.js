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

	render()
	{
		return(
			<div className="App">
			    <header className="App-header">
					Welcome to site!
					<hr/>
					<Time isRunning={this.state.isRunning}/>
				</header>
	    	</div>
    	);
	}
}

export default App;
