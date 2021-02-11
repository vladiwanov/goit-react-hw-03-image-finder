const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19172915-1886b55ac07c270b02db4da6f';

const FetchImages = (newName, page, perPage) => {
  console.log(
    ' Fetchimges params:',
    `\n BASE_URL: ${BASE_URL},\n perPage: ${perPage},\n page: ${page},\n API_KEY: ${API_KEY} \n newName: ${newName}`,
  );
  console.log(
    'request string:>>',
    `${BASE_URL}?${newName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  );
  return fetch(
    `${BASE_URL}?${newName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  ).then(response => response.json());
};
export default FetchImages;
