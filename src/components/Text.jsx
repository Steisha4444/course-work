import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './text.css';
import {
        BrowserRouter as Router,
        useHistory
} from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Theme from "./theme";


function Text(props) {

        const history = useHistory();
        const [page, setPage] = useState(0);
        var textEn = props.location.state.ContextEn;
        var textUa = props.location.state.ContextUa;
        var formatted;
        var pages;
        function formatText(text) {

                console.log();
                // a.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n");
                formatted = text.split('*').join("\n\n");
                pages = formatted.split('$');
                return pages[page];
        }

        return (

                <div className="behindText">
                        <Theme />
                        <div className="textNavigate">
                                <Link className="backStep"  to={{
                                        pathname: "/database",
                                }}
                                >
                                        Books  
                                </Link>
                                <span className="backStep" >{'>'} </span>
                                <span className="backStep" onClick={history.goBack}> Book Description </span>
                        </div>
                        <div className="row" id="text">
                       
                                <p className="textEn" id="textEn">{
                                        formatText(textEn)}</p>
                                <p className="textUa" id="textUa">{
                                        formatText(textUa)}</p>
                        </div>
                        <div className="page"> {page + 1}/{props.location.state.pages}</div>
                        <a className="previous" onClick={() => { if (page > 0) setPage((page - 1)); else { } }}> <img className="arrow" src={require(`../img/arrL.png`).default} alt="" /></a>
                        <a className="next" onClick={() => { if (page < props.location.state.pages - 1) setPage((page + 1)); else { } }}><img className="arrow" src={require(`../img/arrR.png`).default} alt="" /></a>
                </div>
        );};

export default Text;