import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal';

const perPage = 24;
let page = 1;

export default class App extends Component {
  state = {
    searchName: '',
    showModal: false,
  };

  getSearchName = name => {
    this.setState({ searchName: name });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { searchName, showModal } = this.state;
    return (
      <>
        <Searchbar onChangeName={this.getSearchName} />
        <ImageGallery params={{ searchName, perPage }} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Hi, it's a modal window</h2>
            <i>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vitae at ab aspernatur, unde quas excepturi quia eaque illo quod,
              omnis exercitationem alias, similique aliquam ipsam provident
              molestiae pariatur doloribus?
            </i>
            <button className="Button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <button className="Button" onClick={this.toggleModal}>
          open Modal
        </button>
      </>
    );
  }
}
