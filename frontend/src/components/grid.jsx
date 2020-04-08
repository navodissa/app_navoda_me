import React, { Component } from "react";
import axios from "axios";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      // quote: "",
      // author: "",
    };
  }

  // React Lifecycle method. This will load right before anything loads
  componentDidMount() {
    axios
      .get("http://quotes.rest/qod.json?category=inspire")
      .then((response) => {
        this.setState({
          quotes: response.data.contents.quotes[0],
          //  author: response.data.contents.quotes[0].author,
        });
        console.log(response.data.contents.quotes[0].author);
      });

    axios({
      method: "GET",
      url: "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
        "x-rapidapi-key": "c2b5d5f7b2msh9e5a2057d3940eep1788b9jsn4e4205af7c5b",
      },
      params: {
        id: "Navod_a",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="card-columns">
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image cap
            </text>
          </svg>

          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">
              This is a longer card It's a broader card with text below as a
              natural lead-in to extra content. This content is a little longer.
              This content is a little bit longer.
            </p>
          </div>
        </div>

        <div class="card p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>{this.state.quotes.quote}</p>
            <footer class="blockquote-footer">
              <small class="text-muted">{this.state.quotes.author}</small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image cap
            </text>
          </svg>

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This card has a regular title and short paragraphy of text below
              it.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <svg
            class="bd-placeholder-img card-img"
            width="100%"
            height="260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Card image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Card image
            </text>
          </svg>
        </div>
        <div class="card p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is another card with title and supporting text below. This
              card has some additional content to make it slightly taller
              overall.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
