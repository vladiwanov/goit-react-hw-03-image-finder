import { Component } from 'react';

class Searchbar extends Component {
  state = {
    name: '',
  };
  handleInputSearchName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeName = event => {
    event.preventDefault();
    this.props.onChangeName(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleChangeName}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={name}
            placeholder="Search images and photos"
            onChange={this.handleInputSearchName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
