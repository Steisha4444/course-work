import React from "react";
import BookCard from "./bd/BookCard";

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                                    
                                    title={book.volumeInfo.title }
                                    author={book.volumeInfo.authors }
                                 
                    />
                })
            }

        </div>
    );
}
export default BookList;