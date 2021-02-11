export default function ImageGalleryItem({ props }) {
  const { id, tags, webformatURL } = props;
  console.log('ITEM:', id, tags, webformatURL);
  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}
