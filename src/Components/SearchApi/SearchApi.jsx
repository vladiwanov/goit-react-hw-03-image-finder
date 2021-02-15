import Error from 'react';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19172915-1886b55ac07c270b02db4da6f';

export default function SearchApi(
  searchName,
  perPage,
  page,
  onChangeState,
  onGetError,
) {
  const add = `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  fetch(add)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject(
        onGetError(
          'ошибка поиска',
          new Error('ошибка поиска' + response.status),
        ),
      );
    })
    //.//then(response => onChangeState({ status: 'resolved', images: response.hits, error:null }))
    .then(response => onChangeState(response.hits))
    .catch(error => onGetError('ERROR' + error.status));
}
