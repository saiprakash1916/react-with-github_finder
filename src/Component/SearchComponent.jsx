import React, { Component, Fragment } from "react";
class SearchComponent extends Component {
  state = {
    term: "",
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleVoice = e => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    // eslint-disable-next-line no-undef
    let recognition = new SpeechRecognition();
    recognition.addEventListener("result", e => {
      let transcript = e.results[0][0].transcript.replace(/\s/g, "");
      this.setState({ term: transcript });
      e.preventDefault();
      this.handleSubmit();
    });
    recognition.start();
    };
    handleKeyBoard = e => {
        if (e.key === 'Enter') {
             e.preventDefault();
            this.handleSubmit();
        }
    }
  handleSubmit = e => {
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <Fragment>
        <section className="col-md-6 mx-auto my-4">
          <article>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="term"
                value={this.state.term}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyBoard}
                className="form-control"
                placeholder="search github users"
              />
              <span className="microphone" onClick={this.handleVoice}>
                <i class="fa fa-microphone" aria-hidden="true"></i>
              </span>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default SearchComponent;