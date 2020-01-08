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
            .then(response => { return response.data.items; }).then(g => {
                let h = [];
                for (let i = 0; i < g.length; i++) {
                    !g[i].volumeInfo.imageLinks ? g.splice(i, 1) : h.push({
                        id: g[i].id,
                        title: g[i].volumeInfo.title,
                        desc: g[i].volumeInfo.description,
                        authors: g[i].volumeInfo.authors,
                        link: g[i].volumeInfo.infoLink,
                        image: g[i].volumeInfo.imageLinks.thumbnail
                    });
                };
                this.setState({ data: h });
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

    saveBook = (o) => {
        console.log(o);
        axios.post('/save', o)
        // .then(res => console.log(res.data));
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
                                    image={page.image}
                                    authors={page.authors}
                                    desc={page.desc}
                                    title={page.title}
                                    link={page.link}
                                    key={page.id}
                                    id={page.id}
                                    saveBook={this.saveBook}
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