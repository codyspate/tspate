import React, { Component } from 'react';
import { Nav } from './shared/components';
import { Home, Projects } from './views';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Route path="/" exact component={Home} />
					<Route path="/projects" exact component={Projects} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
