import React, { Component, Fragment } from "react";
import "./index.css";
class App extends Component {
  state = {
    text: "Welcome!"
  };

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    const { text } = this.state;
    const defaultImgNode = (
      <img
        className="w-full"
        src="https://res.cloudinary.com/dynugozpy/image/upload/v1560056946/Dinamic_OGP_t8joyp.png"
        alt="defaultImg"
      />
    );
    const textImgNode = (
      <Fragment>
        <img
          className="w-full shadow"
          src={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_50_bold:${
            this.state.text
          },co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
          alt="defaultImg"
        />
        <button class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a
            href={`https://res.cloudinary.com/dynugozpy/image/upload/l_text:Sawarabi%20Gothic_50_bold:${
              this.state.text
            },co_rgb:333,w_500,c_fit/v1560056946/Dinamic_OGP_t8joyp.png`}
            download="download.png"
            className="text-white"
          >
            Download
          </a>
        </button>
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
          <input
            className="shadow w-full border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Input here!"
            onChange={this.onChange}
            name="text"
            value={text}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
