import LoaderButton from '../LoaderButton';

export default function Button({
  status,
  showModal,
  onLoadMore,
  // onCloseModal
}) {
  const loadMore = e => {
    e.preventDefault();
    // onCloseModal()
    showModal = false;
    onLoadMore();
  };
  return status === 'pending' ? (
    <LoaderButton />
  ) : (
    <button className="Button" type="button" onClick={loadMore}>
      Load more
    </button>
  );
}

//// export default function Button({ page, status, onChangeState}) {
// //  const loadMore = e => {
// //    e.preventDefault();
//     // onChangeState({ status: 'pending', page: page + 1 })
// //    onChangeState([{ status: 'pending' }, { page: page + 1 }]);
// //  };
// //  return status === 'pending' ? (
// //    <LoaderButton />
//  // ) : (
////     <button className="Button" type="button" onClick={loadMore}>
// //      Load more
//  //   </button>
//  // );
//// }
