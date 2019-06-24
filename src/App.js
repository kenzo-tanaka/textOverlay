import React, { Component, Fragment } from "react";
import "./index.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PocketShareButton,
  PocketIcon
} from "react-share";

class App extends Component {
  state = {
    text: "Welcome!",
    bold: "",
    boldel: "bg-white",
    fontSize: "50",
    smallel: "bg-white",
    largeel: "bg-white"
    // 30 50 70
  };

  onChange = e => {
    let text = e.target.value;
    this.setState({ text });
  };

  handleFontWeight = () => {
    const fontWeight = this.state.bold;
    if (fontWeight === "")
      this.setState({
        bold: "bold",
        boldel: "bg-blue-500 text-white"
      });
    else {
      this.setState({
        bold: "",
        boldel: "bg-white"
      });
    }
  };

  handleToSmall = () => {
    const fontSize = this.state.fontSize;
    if (fontSize !== "30") {
      this.setState({
        fontSize: "30",
        largeel: "bg-white",
        smallel: "bg-blue-500 text-white"
      });
    } else {
      this.setState({
        fontSize: "50",
        smallel: "bg-white"
      });
    }
  };

  handleToLarge = () => {
    const fontSize = this.state.fontSize;
    if (fontSize !== "70") {
      this.setState({
        fontSize: "70",
        smallel: "bg-white",
        largeel: "bg-blue-500 text-white"
      });
    } else {
      this.setState({
        fontSize: "50",
        smallel: "bg-white",
        largeel: "bg-white"
      });
    }
  };

  render() {
    let { text } = this.state;
    let newText;
    if (text.includes("\n")) {
      newText = text.replace("\n", "%0A");
    }
    const defaultImgNode = (
      <Fragment>
        <img
          className="w-full shadow"
          src="https://res.cloudinary.com/dynugozpy/image/upload/v1560056946/Dinamic_OGP_t8joyp.png"
          alt="defaultImg"
        />
        <div className="text-right">
          <button
            class="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
            disabled
          >
            Download
          </button>
        </div>
      </Fragment>
    );
    const textImgNode = (
      <Fragment>
        {text.includes("\n") ? (
          <img
            className="w-full shadow"
            src={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_${
              this.state.fontSize
            }_${
              this.state.bold
            }:${newText},co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
            alt="defaultImg"
          />
        ) : (
          <img
            className="w-full shadow"
            src={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_${
              this.state.fontSize
            }_${
              this.state.bold
            }:${text},co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
            alt="defaultImg"
          />
        )}

        {/* Handle fontWeight , size */}
        <div className="text-left inline-block">
          <div className="py-4">
            <span
              style={{ cursor: "pointer" }}
              onClick={this.handleFontWeight}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 ${
                this.state.boldel
              }`}
            >
              Bold
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={this.handleToSmall}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 ${
                this.state.smallel
              }`}
            >
              Small
            </span>
            <span
              style={{ cursor: "pointer" }}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${
                this.state.largeel
              }`}
              onClick={this.handleToLarge}
            >
              Large
            </span>
          </div>
        </div>
        <div className="inline-block float-right">
          <a
            href={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_${
              this.state.fontSize
            }_${this.state.bold}:${
              this.state.text
            },co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
            className="text-white"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Download
            </button>
          </a>
        </div>
      </Fragment>
    );
    return (
      <Fragment>
        <div className="mt-5 max-w-4xl mx-auto">
          <div className="">
            {text === "" ? (
              <Fragment>{defaultImgNode}</Fragment>
            ) : (
              <Fragment>{textImgNode}</Fragment>
            )}
          </div>
        </div>
        <div className="mt-3 max-w-4xl mx-auto">
          <textarea
            className="shadow w-full border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Input here!"
            onChange={this.onChange}
            name="text"
            value={text}
            rows="5"
          />
        </div>
        <div className="mt-5 text-center">
          <FacebookShareButton
            className="d-inline-block mr-4 pointer"
            url={window.location.href}
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton
            className="d-inline-block pointer mr-4"
            url={window.location.href}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <PocketShareButton
            className="d-inline-block pointer"
            url={window.location.href}
          >
            <PocketIcon size={40} round />
          </PocketShareButton>
        </div>
      </Fragment>
    );
  }
}

export default App;
