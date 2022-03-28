import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import SearchArea from "./SearchArea";
import request from 'superagent';
import BookList from "./BookList";
import "./book.css";


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''

        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
      
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
               
                const cleanData = this.cleanData(data)
                this.setState({ books: cleanData })
            })
    }
    handleSearch = (e) => {
       
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) => {
        
        this.setState({ sort: e.target.value })

    };
    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: " https://i.pinimg.com/736x/b7/28/6c/b7286c27f42ea1f3aa0bebf003755fde.jpg" };
            }
            return book;
            });
        return cleanedData;
    }

    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if(this.state.sort == 'Newest'){
               
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            }
            else if(this.state.sort == 'Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
            }
        })
        return (<div>

            <Header />
             <div class="books"></div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
            <BookList books={sortedBooks} />
        </div>
        );
    }
};

