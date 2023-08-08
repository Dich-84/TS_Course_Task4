const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Response {
    postId: number
    id: number
    name: string
    email: string
    body: string
};

const getData = (url: string): Promise<Response[]> => {
  return fetch(url)
  .then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error ('Что-то пошло не так...')
    }
  })
};

getData(COMMENTS_URL)
  .then((data): void => {
    if (!Array.isArray(data)) {
      throw new Error("Данные не соответствуют ожидаемому формату")
    }
    for (let obj of data) {
      if (obj && obj.id && obj.email) {
        console.log(`ID: ${obj.id}, Email: ${obj.email}`);
      } else {
        throw new Error('Полученные данные содержат недостающие обязательные поля')
      }
    }
  })
  .catch((error: Error): void => {
    console.error(`Ошибка: ${error.message}`);
  });
