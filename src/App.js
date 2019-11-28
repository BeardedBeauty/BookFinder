import React from 'react';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Search from "./components/Search";
import Book from "./components/Book";
import axios from "axios";
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			q: ""
		}
	};

	send = () => {
		const w = this.state.q.replace(" ", "+");
		axios.get("https://www.googleapis.com/books/v1/volumes?q=" + w + "&maxresults=30&key=AIzaSyDdG-co-zolXTJoNeRYFwE2f7L4qLDVRCY")
			.then(response => {
				return response.data.items;
			}).then(g => {
				this.setState({ data: g });
			});
	};

	input = (event) => {
		const q = event.target.value;
		this.setState({ q });
		// console.log(q);
	};

	keyPress = (event) => {
		if (event.key === 'Enter') {
			this.send();
		};
	};

	render() {
		return (
			<Wrapper>
				<Router>
					<Nav request={this.input} onKeyPress={this.keyPress} />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/Search" component={Search} />
					</Switch>
				</Router>
				<div className="container">
					<div className="row">
						{this.state.data.map(page =>
							<Book>
								image={page.volumeInfo.previewLink}
								authors={page.volumeInfo.authors}
								desc={page.volumeInfo.description}
								title={page.volumeInfo.title}
								link={page.volumeInfo.infoLink}
							</Book>
						)}
					</div>
				</div>
			</Wrapper>
		);
	}
};

export default App;