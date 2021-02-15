import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
const perPage = 12;

export default class App extends Component {
  state = {
    searchName: '',
    galleryLength: 0,
    status: '',
    page: 1,
  };

  getSearchName = name => {
    if (name === '') {
      alert('поле не должно быть пустым');
      return;
    }
    this.setState({ searchName: name });
  };

  render() {
    const { searchName, page } = this.state;
    return (
      <>
        <Searchbar onChangeName={this.getSearchName} />
        <ImageGallery
          params={{ searchName, perPage, page }}
          onToggleModal={this.toggleModal}
          onGetParametersForLoadButton={this.getParametersForLoadButton}
        />
      </>
    );
  }
}
