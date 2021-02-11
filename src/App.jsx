// import { ToastContainer, toast } from 'react-toastify'
import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19172915-1886b55ac07c270b02db4da6f';
const perPage = 4;
let page = 1;

class App extends Component {
  state = {
    imageName: '',
    // status:'idle'
  };

  // componentDidUpdate(prevProps, prevState) {
  //     const prevName = prevState.imageName;
  //     const newName = this.state.imageName;
  //     if (prevName !== newName) {
  //         console.log('новое состояние', this.state)
  //         console.log('предыдущее состояние',prevState);
  //         page = 1
  //         // this.getImages()
  //         FetchImages(newName, page, perPage)
  //             .then(response => {
  //                 this.setState({ images: response.hits })
  //                 console.log('массив объектов изображений :', this.state.images)
  //             })
  //             .catch(console.error())
  //         return
  //     }
  //     console.log("они равны")
  //     console.log('this.state', this.state)
  //         console.log('prevState',prevState);

  //         ;
  // }

  handleFormSubmit = name => {
    this.setState({ imageName: name });
  };

  render() {
    const {
      imageName,
      // status
    } = this.state;
    return (
      <>
        <Searchbar onChangeName={this.handleFormSubmit} />
        <ImageGallery
          imageRequest={{ imageName, BASE_URL, API_KEY, perPage, page }}
        />
        <Button loadMore={page} />
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </>
    );
  }
}

export default App;
