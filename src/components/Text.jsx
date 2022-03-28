import React, { Component , useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './text.css';


function Text(props) {
       
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
        //  function paggingL(){
        //         this.updateState = () => this.setState({page: (this.state.page - 1)});
        //  }

        //  function paggingR(){
        //         this.updateState = () => this.setState({page: (this.state.page + 1)});
        //  }
        return (

                <div>
                        <div className="row">
                                <p className="textEn">{
                                        formatText(textEn)}</p>
                                <p className="textUa">{
                                        formatText(textUa)}</p>
                        </div>

                        <a className="previous" onClick={() =>{ if(page>0) setPage((page - 1)); else{}}}> <img className="arrow" src={require(`../img/arrL.png`).default} alt="" /></a>
                        <a className="next" onClick={() => { if(page<props.location.state.pages-1)setPage((page + 1)); else{} } }><img className="arrow" src={require(`../img/arrR.png`).default} alt="" /></a>
                </div>

        );



};

export default Text;