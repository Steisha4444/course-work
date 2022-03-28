import React, { Component, useState, useEffect } from "react";
import "./Database.css";
import BookInfo from "../bookInfo";
import Axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";




function DataBase() {
        // const [bookName, level, Author, Description,ContextEn,ContextUa] = useState('');
        const [bookName, setBookName] = useState('');
        const [level, setLevel] = useState('');
        const [Author, setAuthor] = useState('');
        const [Description, setDescription] = useState('');
        const [ContextEn, setContextEn] = useState('');
        const [ContextUa, setContextUa] = useState('');
        const [publicationDate, setPublicationDate] = useState('');
        const [pages, setPages] = useState('');
        const [rating, setRating] = useState('');
        const [ type, setType] = useState('');
        const [genres, setGenres] = useState('');
        // const [bookNameList, levelList,authorList, descriptionList, contextEnList,contextUaList] = useState([]);
        const [bookNameList, setBookNameList] = useState([]);


        useEffect(() => {
                Axios.get('http://localhost:3001/api/get').then((response) => {
                        setBookNameList(response.data)
                });
        }, []);

        const submitContextEn = () => {
                Axios.post('http://localhost:3001/api/insert', {
                        bookName: bookName,
                        level: level,
                        Author: Author,
                        Description: Description,
                        ContextEn: ContextEn,
                        ContextUa: ContextUa,
                        publicationDate: publicationDate,
                        pages: pages,
                        rating: rating,
                        type: type,
                        genres: genres,

                }).then(() => {
                        alert("successful insert");
                })
        };

        return (

                <div>
                        <h1>CRUD opperations</h1>
                        <div className="form">
                                <label>Name</label>
                                <input type="text" name="bookName" onChange={(e) => {
                                        setBookName(e.target.value)
                                }} />
                                <label>Level</label>
                                <input type="text" name="level" onChange={(e) => {
                                        setLevel(e.target.value)
                                }} />
                                <label>Author</label>
                                <input type="text" name="author" onChange={(e) => {
                                        setAuthor(e.target.value)
                                }} />
                                <label>Description  </label>
                                <input type="text" name="description" onChange={(e) => {
                                        setDescription(e.target.value)
                                }} />
                                <label>English Text</label>
                                <input type="text" name="contextEn" onChange={(e) => {
                                        setContextEn(e.target.value)
                                }} />
                                <label>Ukrainian Text</label>
                                <input type="text" name="contextUa" onChange={(e) => {
                                        setContextUa(e.target.value)
                                }} />
                                 <label>Publication Date</label>
                                <input type="text" name="publicationDate" onChange={(e) => {
                                        setPublicationDate(e.target.value)
                                }} />
                                 <label>Pages</label>
                                <input type="text" name="pages" onChange={(e) => {
                                        setPages(e.target.value)
                                }} />
                                 <label>Rating</label>
                                <input type="text" name="rating" onChange={(e) => {
                                        setRating(e.target.value)
                                }} />
                                 <label>Type</label>
                                <input type="text" name="type" onChange={(e) => {
                                        setType(e.target.value)
                                }} />
                                 <label>Genres</label>
                                <input type="text" name="genres" onChange={(e) => {
                                        setGenres(e.target.value)
                                }} />
                        </div>
                        <button onClick={submitContextEn} >Submin</button>
                        <div className="list" >
                                {bookNameList.map((val) => {
                                        return (

                                                <div className="card-container">

                                                        <img src={require(`../../books/${val.bookName}.jpg`).default} className='pictures' alt="" />
                                                        <div className="desc">
                                                                <Link to={{
                                                                        pathname: "/books",
                                                                        state: val
                                                                }}
                                                                >
                                                                        Title: {val.bookName}
                                                                </Link>
                                                                <h3>Author: {val.Author}</h3>
                                                                <h3>Rate: {val.rating}/5</h3>
                                                        </div>

                                                </div>


                                        );
                                })};

                        </div>

                </div>

        );

};

export default DataBase;