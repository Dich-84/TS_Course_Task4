const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Resp {
    postId?: number
    id?: number
    name?: string
    email?: string
    body?: string
};

const getData = (url: string): Promise<Resp[]> => {
  return fetch(url)
  .then(response => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error ('Something went wrong...')
    }
  })
};

getData(COMMENTS_URL)
  .then((data): void => {
    for (let obj of data) {
        console.log(`ID: ${obj.id}, Email: ${obj.email}`);
    }
  })
  .catch((error): void => {
    console.log(error);
  });
