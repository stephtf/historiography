
const displayNote = () => {
    fetch('/api/books', {
        "method": 'GET',
    })
    .then(response => {
        return response.json();
    })
    .then(bookData => {
        console.log(bookData);
    })
    .catch(err => {
        console.error(err);
    }); 
    console.log("does this button work?");
}

const noteBoxes = document.getElementsByClassName('select-book'
);
for (let i = 0; i < noteBoxes.length; i++) {
    noteBoxes[i].addEventListener('click', () => {
        displayNote(); 
    })
}


