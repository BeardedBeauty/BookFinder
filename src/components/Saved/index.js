import React from "react";
import axios from "axios";
import Book from "../Book";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    };

    componentDidMount() {
        axios.get('http://localhost:3003/all')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                        {
                            this.state.books.map(page =>
                                <Book
                                    image={page.image}
                                    authors={page.authors}
                                    desc={page.desc}
                                    title={page.title}
                                    link={page.link}
                                    key={page.id}
                                    id={page.id}
                                // saveBook={this.saveBook}
                                />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Saved;