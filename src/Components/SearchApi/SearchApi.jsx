const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19172915-1886b55ac07c270b02db4da6f';

export default function SearchApi(
  page,
  searchName,
  perPage,
  onChangeState,
  onScroll,
) {
  const add = `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  fetch(add)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(new Error('ошибка поиска'));
    })
    // .then(response => onChangeState({ status: 'resolved', images: response.hits, error:null }))
    .then(response =>
      onChangeState([
        { status: 'resolved' },
        { images: response.hits },
        { error: null },
      ]),
    )

    // .catch(error => onChangeState({ error:'ERROR' ,status: 'rejected', images:[] }))
    .catch(error =>
      onChangeState([
        { error: 'ERROR' },
        { status: 'rejected' },
        { images: [] },
      ]),
    );
  // .finally(setTimeout(onScroll(),1000))
}
