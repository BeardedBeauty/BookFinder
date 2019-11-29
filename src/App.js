import React from 'react';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Search from "./components/Search";
// import Book from "./components/Book";
// import axios from "axios";
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<Router>
					<Nav />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Search" component={Search} />
					</Switch>
				</Router>
			</Wrapper>
		);
	}
};

export default App;