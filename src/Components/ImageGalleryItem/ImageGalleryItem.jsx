export default function ImageGalleryItem({ props }) {
  const { tags, webformatURL } = props;
  // console.log(id, tags, webformatURL);
  return (
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  );
}

// export default function ImageGalleryItem({props}) {
//     const {id, tags, webformatURL  } = props;
//     // console.log(id, tags, webformatURL);
//     return (
//         <li
//             key={id}
//             className="ImageGalleryItem">
//             <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
//         </li>
//     )

// }
