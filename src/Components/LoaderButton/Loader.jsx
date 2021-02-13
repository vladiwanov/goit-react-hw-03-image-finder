import Loader from 'react-loader-spinner';

export default function LoaderButton() {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        className="Loader"
      />
    </>
  );
}
