// here i am just testing stuff out
const rootEl = document.querySelector('#root');

const getData = () => {
    fetch('/api/books', {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getData();

console.log("hello Steph. the index.js is connected to main.handlebars and it is grabbing all the books lol");