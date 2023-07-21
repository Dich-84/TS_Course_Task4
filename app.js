"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
;
const getData = (url) => {
    return fetch(url)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Something went wrong...');
        }
    });
};
getData(COMMENTS_URL)
    .then((data) => {
    for (let obj of data) {
        console.log(`ID: ${obj.id}, Email: ${obj.email}`);
    }
})
    .catch((error) => {
    console.log(error);
});
