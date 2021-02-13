import LoaderButton from '../LoaderButton';

export default function Button({ page, status, onChangeState, onScroll }) {
  const loadMore = e => {
    e.preventDefault();
    // onChangeState({ status: 'pending', page: page + 1 })
    onChangeState([{ status: 'pending' }, { page: page + 1 }]);
  };
  return status === 'pending' ? (
    <LoaderButton />
  ) : (
    <button className="Button" type="button" onClick={loadMore}>
      Load more
    </button>
  );
}
