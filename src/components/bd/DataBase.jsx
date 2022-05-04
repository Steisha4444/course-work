import React, {  useState, useEffect } from "react";
import "./Database.css";
import Axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HamMenu from "../hamMenu";




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
        const [type, setType] = useState('');
        const [genres, setGenres] = useState('');
        // const [bookNameList, levelList,authorList, descriptionList, contextEnList,contextUaList] = useState([]);
        const [bookNameList, setBookNameList] = useState([]);
        const [toDisplayBookNameList, setToDisplayBookNameList] = useState([]);
        const [filters, setFilters] = useState([]);


        useEffect(() => {
                Axios.get('http://localhost:3001/api/get').then((response) => {
                        setBookNameList(response.data)
                        setToDisplayBookNameList(response.data)
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
    
        const handleCheckboxChange = (event) => {
                if( filters.includes(event.target.id)){
                        const index = filters.indexOf(event.target.id);
                        filters.splice(index, 1);
                }
                else{
                filters.push(event.target.id);
                }
              console.log( filters );
                let newArray = bookNameList.filter( e => filters.includes(e.level));
                setToDisplayBookNameList(newArray);
        };
        
        return (
                <div>  <HamMenu />
                        <div className="criteria" id="bodycheckbox">
                        <h1 className="head">All books</h1>
                                <input type="checkbox" className="toggle1" id="A2" onChange={handleCheckboxChange}  /> <label>A2</label>
                             
                                <input type="checkbox" className="toggle1" id="B1" onChange={handleCheckboxChange}/> <label>B1</label>
                              
                                <input type="checkbox" className="toggle1" id="B2" onChange={handleCheckboxChange} /> <label>B2</label>
                               
                                <input type="checkbox" className="toggle1" id="C1" onChange={handleCheckboxChange} /> <label>C1</label>
                        </div>
                        <div className="list" >
                                {toDisplayBookNameList.map((val) => {
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
                                                                <h3>Level: {val.level}</h3>
                                                                <h3>Genres: {val.genres}</h3>
                                                                <h3>Type: {val.type}</h3>
                                                        </div>
                                                </div>
                                        );
                                })}
                        </div>
                </div>

        );

};

export default DataBase;