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
    const { page } = this.state;

    if (prevProps.params.searchName !== this.props.params.searchName) {
      this.getImageGallery(searchName, perPage);
    }
  }

  getImageGallery = (searchName, perPage) => {
    this.setState({ page: 1, status: 'pending', images: [] });
    // const page = 1;
    SearchApi(
      searchName,
      perPage,
      this.state.page,
      this.changeState,
      this.getError,
    );
    // SearchApi(searchName, perPage, page, this.changeState)
  };

  loadMoreGallery = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
    const { searchName, perPage } = this.props.params;
    console.log('searchName, perPage', searchName, perPage);

    SearchApi(
      searchName,
      perPage,
      this.state.page + 1,
      this.changeState,
      this.getError,
    );
  };

  changeState = rez => {
    console.log('результат фетча:', rez);
    this.setState(
      prevState => ({
        images: [...prevState.images, ...rez],
        status: 'resolved',
      }),
      this.scroll,
    );
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  getError = rez => {
    console.log(rez);
    this.setState({ error: 'error', status: 'rejected' });
  };

  render() {
    const { images, page, status } = this.state;

    if (status === 'idle') {
      return <>{/* <p>'Введите название'</p> */}</>;
    }
    //! - разобраться с ошибкой
    // if (status === 'rejected') {
    //    return (error.massage)
    // }

    if (status === 'pending' || status === 'resolved') {
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
            <Button onLoadMore={this.loadMoreGallery} status={status} />
          )}
        </>
      );
    }
  }
}

//----------------------------------------------------

// componentDidUpdate(prevProps, prevState) {
//     const { searchName, perPage } = this.props.params;
//     console.log(' Стейт до выполнения фетча, перед условием :', this.state);
//     console.log('имя поиска', searchName);

//     if (prevProps.params.searchName !== searchName)
//       {
//         console.log('prevState.page', prevState.page)
//         console.log('this.state.page', this.state.page)
//         console.log('Выполняется условие 1');
//       this.setState({ images: [], status: 'pending', error: null, page: 1 })
//       this.getTest()

//     SearchApi(this.state.page, searchName, perPage, this.changeState)
//     console.log(' СТейт после выполнения фетча:', this.state);
// }
//   console.log(' Стейт до выполнения фетча после условия на наличие имени:', this.state);

//   if (prevState.page !== this.state.page) {
//     console.log('Выполняется условие 2');
//     SearchApi(this.state.page, searchName, perPage, this.changeState);
//     this.setState(
//     prevState => ({
//       images: [...prevState.images, ...this.state.images],
//     }),
//     this.scroll,)
//   }

// }

// //* оба варианта рабочие:
// //, Вариант -1 (через масссив объектов)
// changeState = params => {
//   params.map(param => this.setState(param));
//   console.log('this.state в поле изменения стейта  после фетча', this.state)
// };

// //, Вариант -2 (через распыление объектов)
// // changeState = params => {
// //     this.setState({...params})
// // }

// scroll = () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
// };

// render() {

//     const { images, page, status } = this.state;

//     if (status === 'idle') {

//       return (
//         <>
//           {/* <p>'Введите название'</p> */}
//         </>
//       )

//     }
//! - разобраться с ошибкой
// if (status === 'rejected') {
//    return (error.massage)
// }

//       if (status === 'pending' || status === 'resolved') {
//         return (
//           <>
//             <ul className="ImageGallery">
//               {images.map(({ id, tags, webformatURL }) => (
//                 <li key={id} className="ImageGalleryItem">
//                   <ImageGalleryItem props={{ tags, webformatURL }} />
//                 </li>
//               ))}
//             </ul>
//             {/* <ul className="ImageGallery">
//                     {images.map(({ id, tags, webformatURL }) =>
//                         <ImageGalleryItem
//                             props={{ id, tags, webformatURL }}
//                         />
//                     )}
//                 </ul> */}
//             {images.length && (
//               <Button
//                 onChangeState={this.changeState}
//                 onScroll={this.scroll()}
//                 page={page}
//                 status={status}
//                 onLoadMore={this.loadMoreGallery}
//               />
//             )}
//           </>
//         )
//       }
//     }
// }
