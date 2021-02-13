import React, { Component } from 'react';
import ImageGalleryItem from 'Components/ImageGalleryItem/ImageGalleryItem';
import SearchApi from 'Components/SearchApi/SearchApi';
import Button from 'Components/Button';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    error: null,
    page: 1,
    // searchName:'',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, perPage } = this.props.params;
    if (prevProps.params.searchName !== searchName) {
      this.setState({ page: 1 });
      SearchApi(this.state.page, searchName, perPage, this.changeState);
    } else if (prevState.page !== this.state.page) {
      SearchApi(
        this.state.page,
        searchName,
        perPage,
        this.changeState,
        this.scroll,
      );
    }
  }

  //* оба варианта рабочие:
  //, Вариант -1 (через масссив объектов)
  changeState = params => {
    console.log(params);
    params.map(param => this.setState(param));
  };

  //, Вариант -2 (через распыление объектов)
  // changeState = params => {
  //     this.setState({...params})
  // }

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, page, status } = this.state;

    // if (status === 'idle') {
    //     return <p>'Введите название'</p>
    // }
    //! - разобраться с ошибкой
    // if (status === 'rejected') {
    //    return (error.massage)
    // }

    return (
      <>
        <ul className="ImageGallery">
          {images.map(({ id, tags, webformatURL }) => (
            <li key={id} className="ImageGalleryItem">
              <ImageGalleryItem props={{ tags, webformatURL }} />
            </li>
          ))}
        </ul>
        {/* <ul className="ImageGallery">
                    {images.map(({ id, tags, webformatURL }) =>
                        <ImageGalleryItem
                            props={{ id, tags, webformatURL }}
                        />
                    )}
                </ul> */}

        {images.length && (
          <Button
            onChangeState={this.changeState}
            onScroll={this.scroll()}
            page={page}
            status={status}
          />
        )}
      </>
    );
  }
}
