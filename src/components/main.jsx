import axios from "axios";
import React, { Component } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./main.scss";

import author from "../img/author.png";

const shareUrl =
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
class Main extends Component {
  state = {
    quote: {},
  };
  async componentDidMount() {
    const { data: quote } = await axios.get("https://api.quotable.io/random");
    this.setState({ quote });
  }

  getQuote = async () => {
    const { data: quote } = await axios.get("https://api.quotable.io/random");
    this.setState({ quote });
  };

  render() {
    const url =
      shareUrl +
      encodeURIComponent(
        '"' + this.state.quote.content + '" ' + this.state.quote.author
      );
    return (
      <main className="quote">
        <div id="quote-box">
          <div id="text">
            <FormatQuoteIcon style={{ fontSize: 20 }} />
            <div className="quote-text">
              <p>
                {this.state.quote.content}
                <FormatQuoteIcon style={{ fontSize: 20 }} />
              </p>
            </div>
          </div>
          <div className="quote__footer">
            <div id="author">
              <div className="img">
                <img className="author-img" src={author} alt="author" />
              </div>
              <h3 className="author__text"> {this.state.quote.author}</h3>
            </div>

            <a
              className="twitter-share-button"
              href={url}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
              <TwitterIcon style={{ fontSize: 40, color: "#1d96cf" }} />
            </a>

            <button
              className="btn btn--white"
              id="new-quote"
              onClick={this.getQuote}
            >
              New quote
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
