import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import FetchImages from '../FetchImages';

class ImageGallery extends Component {
  state = {
    images: [],
    name: null,
    // status:'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    const { BASE_URL, API_KEY, perPage, page } = this.props.imageRequest;
    // console.log('imageName, BASE_URL, API_KEY, perPage, page :', imageName, BASE_URL, API_KEY, perPage, page);
    const prevName = prevProps.imageRequest.imageName;
    // this.setState({name:this.props.imageRequest.imageName})
    const newName = this.props.imageRequest.imageName;
    if (prevName !== newName) {
      console.log('новое состояние:', newName);
      console.log('предыдущее состояние:', prevName);
      //    let page = 1
      FetchImages(newName, page, perPage, BASE_URL, API_KEY)
        .then(response => {
          this.setState({ images: response.hits });
          // console.log('массив объектов изображений :', this.state.images)
        })
        .catch(console.error());

      return;
    }
    console.log('они равны');
    console.log('this.state', this.state);
    console.log('prevState', prevState);
  }

  render() {
    const { images } = this.state;
    return (
      <ul className="ImageGallery">
        {images.map(({ id, tags, webformatURL }) => (
          <ImageGalleryItem props={{ id, tags, webformatURL }} />
        ))}
      </ul>
    );
  }
}

// const ImageGallery = ({ images }) => (
//     <ul className="ImageGallery">
//         {
//             images.map(({ id, tags, webformatURL }) => (
//                 <ImageGalleryItem
//                     props={{ id, tags, webformatURL }} />
//             ))
//         }
//     </ul>
// )
export default ImageGallery;
