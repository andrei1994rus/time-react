import './App.css';
import React from 'react';
import Time from './components/time';

class App extends React.Component
{
	render()
	{
		return(
			<div className="App">
			    <header className="App-header">
					<p>Welcome to site!</p>
					<hr></hr>
				</header>
				<Time/>
	    	</div>
    	);
	}
}

export default App;
