import React, { Component } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import Temp from './components/temp-page/temp-page';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Route path="/" exact component={Body} />
					<Route path="/ee" exact component={Temp} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
