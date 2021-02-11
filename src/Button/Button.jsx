import { Component } from 'react';

export default class Button extends Component {
  state = {
    status: 'idle',
  };

  scroll = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  onLoadMore = () => (this.props.loadMore.page += 1);

  render() {
    return (
      <button type="button" className="Button" onClick={this.onLoadMore}>
        Load More
      </button>
    );
  }
}
