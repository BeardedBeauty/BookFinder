import React from "react";
import axios from "axios";
import Book from "../Booksaved";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    };

    componentDidMount() {
        axios.get('/all')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    deleteBook = (o) => {
        console.log(o);
        axios.delete('/delete', o).then(res => console.log(res.data));
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
                                    deleteBook={this.deleteBook}
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