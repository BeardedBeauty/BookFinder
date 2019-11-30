import React from "react";
import Book from "../Book";
import axios from "axios";
import "./style.css";

class Home extends React.Component {
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
                for (let i = 0; i < g.length; i++) {
                    if (!g[i].volumeInfo.imageLinks) {
                        g.splice(i, 1);
                    }
                }
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

    saveBook = (stuff) => {
        axios.post('http://localhost:3003/book/save', stuff)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <>
                <div className="navback z-depth-3">
                    <div className="container">
                        <div className="row">
                            <input placeholder="search" id="search" type="text"
                                onChange={this.input}
                                onKeyPress={this.keyPress}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.data.map(page =>
                                <Book
                                    image={page.volumeInfo.imageLinks.thumbnail}
                                    authors={page.volumeInfo.authors}
                                    desc={page.volumeInfo.description}
                                    title={page.volumeInfo.title}
                                    link={page.volumeInfo.infoLink}
                                    save={this.saveBook}
                                />
                            )
                        }
                    </div >
                </div >
            </>
        )
    }
}

export default Home;