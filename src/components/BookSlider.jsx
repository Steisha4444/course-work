import React, { Component, useState, useEffect } from "react";
import "./bd/Database.css";
import "./bookSlider.css"
import Axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HamMenu from "./hamMenu";
import AwesomeSlider from 'react-awesome-slider';




function BookSlider() {
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
    const [type, setType] = useState('');
    const [genres, setGenres] = useState('');
    // const [bookNameList, levelList,authorList, descriptionList, contextEnList,contextUaList] = useState([]);
    const [bookNameList, setBookNameList] = useState([]);
    const [slide, setSlide] = useState(8);


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
            <h1 className="choose">Choose Book To Read</h1>
            <div className="list " id="slider" >

                {bookNameList.slice(slide - 8, slide).map((val) => {
                    return (

                        <div className="card-containers ">

                            <img src={require(`../books/${val.bookName}.jpg`).default} className='picturesSlider' alt="" />

                            <div className="desc">
                                <Link  to={{
                                    pathname: "/books",
                                    state: val
                                }}
                                >
                                    Title: {val.bookName}
                                </Link>

                            </div>



                        </div>


                    );
                })}
                <a className="previousL" onClick={() => { if (slide > 8) setSlide((slide - 8)); else { } }}> <img className="arrowM" src={require(`../img/arrL.png`).default} alt="" /></a>

                <a className="nextR" onClick={() => { if (slide < 23) setSlide((slide + 8)); else { } }}><img className="arrowM" src={require(`../img/arrR.png`).default} alt="" /></a>
            </div>

            <div className="article">
            <h3 className="title">A New Way to Read?</h3>
            <h3 className="title"> Features and Benefits of Parallel Text Books</h3>
            <div className="benefit">
            <p>Benefit 1 – They encourage ‘noticing’</p>
            <p>Benefit 2 – They can effectively scaffold reading with less confident readers</p>
            <p>Benefit 3 – Students learn vocabulary in context</p>
            <p>Benefit 4 – They facilitate access to more challenging texts</p>
            <p>Benefit 5 – Differentiation</p>
            <p>Benefit 3 – Students learn vocabulary in context</p>
            </div>
            </div>
        </div>

    );

};

export default BookSlider;