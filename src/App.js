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
    largeel: "bg-white", // 25 50 70
    replacedText: "",
    defaultImg:
      "https://res.cloudinary.com/dynugozpy/image/upload/v1560056946/Dinamic_OGP_t8joyp.png",
    Img02:
      "https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_50_:welcome!,co_rgb:333,w_500,c_fit/v1561603540/dynamic_ogp02_tsxcmc.png"
  };

  onChange = e => {
    let text = e.target.value;
    const Img02_url = this.state.Img02.split("/"); // / で区切られた配列で返す

    // 改行を含むかどうかで条件分岐
    if (text.includes("\n")) {
      let replacedText = text.replace(/\n/g, "%0A");
      Img02_url.splice(
        6,
        1,
        `l_text:Sawarabi%20Gothic_${this.state.fontSize}_${
          this.state.bold
        }:${replacedText},co_rgb:333,w_500,c_fit`
      ); //配列指定箇所置換
      let textImg02_url = Img02_url.join("/"); // 結合する
      this.setState({
        text: text,
        replacedText: replacedText,
        Img02: textImg02_url
      });
    } else {
      Img02_url.splice(
        6,
        1,
        `l_text:Sawarabi%20Gothic_${this.state.fontSize}_${
          this.state.bold
        }:${text},co_rgb:333,w_500,c_fit`
      ); //配列指定箇所置換
      let textImg02_url = Img02_url.join("/"); // 結合する
      this.setState({ text, Img02: textImg02_url });
    }
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
    if (fontSize !== "25") {
      this.setState({
        fontSize: "25",
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
    const defaultImgNode = (
      <Fragment>
        <div className="card-scroll flex overflow-x-auto">
          <img
            className="mt-5 mb-5 mr-3 ml-3 w-full shadow"
            src={this.state.defaultImg}
            alt="defaultImg"
          />
          <img
            src="https://res.cloudinary.com/dynugozpy/image/upload/v1561603540/dynamic_ogp02_tsxcmc.png"
            alt="defalut_img02"
            className=" mt-5 mb-5 shadow pointer"
          />
        </div>
      </Fragment>
    );
    const textImgNode = (
      <Fragment>
        {this.state.text.includes("\n") ? (
          <div className="card-scroll flex overflow-x-auto">
            <img
              className="mt-5 mb-5 ml-3 mr-3 w-full shadow"
              src={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_${
                this.state.fontSize
              }_${this.state.bold}:${
                this.state.replacedText
              },co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
              alt="defaultImg"
            />
            <img
              src={this.state.Img02}
              alt="defalut_img02"
              className=" mt-5 mb-5 shadow pointer"
            />
          </div>
        ) : (
          <div className="card-scroll flex overflow-x-auto">
            <img
              className="mt-5 mb-5 ml-3 mr-3 shadow"
              src={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_${
                this.state.fontSize
              }_${this.state.bold}:${
                this.state.text
              },co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
              alt="defaultImg"
            />
            <img
              src={this.state.Img02}
              alt="defalut_img02"
              className=" mt-5 mb-5 shadow pointer"
            />
          </div>
        )}

        {/* Handle fontWeight , size */}
        <div className="text-left inline-block">
          <div className="py-4">
            <span
              onClick={this.handleFontWeight}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 pointer ${
                this.state.boldel
              }`}
            >
              Bold
            </span>
            <span
              onClick={this.handleToSmall}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 pointer ${
                this.state.smallel
              }`}
            >
              Small
            </span>
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 pointer ${
                this.state.largeel
              }`}
              onClick={this.handleToLarge}
            >
              Large
            </span>
          </div>
        </div>
      </Fragment>
    );
    return (
      <Fragment>
        <div className="mt-5 max-w-4xl mx-auto">
          <div className="">
            {this.state.text === "" ? (
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
            value={this.state.text}
            rows="3"
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
