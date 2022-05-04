import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';
export default class Theme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            space: props.space,
            font: props.font
        };
    }

    handleColourBlue = () => {
        console.log("fffff");
        document.body.classList.toggle('dark-theme');
    }
    handleColourPink = () => {
        console.log("fffff");
        document.body.classList.toggle('pink-theme');
    }
    handleColourPurple = () => {
        console.log("fffff");
        document.body.classList.toggle('purple-theme');
    }
    handleColourBrown = () => {
        console.log("fffff");
        document.body.classList.toggle('brown-theme');
    }
    handleLineSpace = (e) => {
        this.setState({
            space: e.target.value
        })
        document.getElementById("textUa").style.lineHeight = e.target.value;
        document.getElementById("textEn").style.lineHeight = e.target.value;
    }
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
        document.getElementById("text").style.fontSize = e.target.value + 'px';
    }

    handleFont = (e) => {
        console.log(e.target.className);
        this.setState({
        font: e.target.className
        })
        document.getElementById("textEn").style.fontFamily = e.target.className ;
        document.getElementById("textUa").style.fontFamily = e.target.className ;
    }
    render() {

        return (

            <div className="themeChange" >
                <section class="t-menu">
                    <input id="t-menutoggle" className="formatText" type="checkbox" />
                    <label class="t-menubtn" for="t-menutoggle">
                    </label>
                    <ul class="t-menubox dark-theme ">
                        <div className="colors">
                            <div className="blue btn-toggle" onClick={this.handleColourBlue}></div>
                            <div className="pink " onClick={this.handleColourPink}></div>
                            <div className="black" onClick={this.handleColourPurple}></div>
                            <div className="brown" onClick={this.handleColourBrown}></div>
                        </div>
                        <div class="controls">
                            <label>font size: {this.state.value}</label>
                            <input type="range" className="fontSizeRange" id="rangeFontSize" min="10" max="48" step="2" onChange={this.handleInput} />
                            <label>line spacing : {this.state.space}</label>
                            <input type="range" className="lineSpaceRange" id="rangeSpace" min="1" max="5" step="0.5" onChange={this.handleLineSpace} />
                        </div>
                        <div className="fonts">
                            <div className="Verdana" onClick={this.handleFont}>Verdana</div>
                            <div className="Garamond" onClick={this.handleFont}>Garamond</div>
                        </div >
                    </ul>
                </section>
            </div>
        );};
};
