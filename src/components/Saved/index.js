import React from "react";
import axios from "axios";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:3003/book')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                <div className="navback z-depth-3">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <p>{this.state.books}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Saved;