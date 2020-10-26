import React, { Component } from 'react';
import HistoryList from '../components/app/rest-ly/History/HistoryList';
import Controls from '../components/Controls/Controls';
import Display from '../components/Display/Display';
import { apiFetch } from '../services/apiFetch';

export default class Restly extends Component {
  state = {
    url: '',
    body: '',
    method: '',
    histories: [],
    display: { 'Restly': 'Ready for request' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    await this.handleFetch();

    return this.setState({
      histories: [...this.state.histories, {
        url: this.state.url,
        body: this.state.body,
        method: this.state.method,
        key: `${this.state.url}+${this.state.method}`
      }]
    });
  }

  handleFetch = () => {
    const { url, body, method } = this.state;
    return apiFetch(url, body, method)
      .then(res => this.setState({ display: res }));
  }

  render() {
    const { url, body, method, display, histories } = this.state;

    return (
      <>
        <section>
          <div>
            <HistoryList histories={histories} />
          </div>

          <div>
            <Controls
              url={url}
              body={body}
              method={method}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
            <Display display={display} />
          </div>
        </section>
      </>
    );
  }
}
