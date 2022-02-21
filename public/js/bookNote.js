
// new note data from form
const newTitle = document.getElementById('note-title');
const newAuthor = document.getElementById('note-author');
const newField = document.getElementById('note-field');
const newArgument = document.getElementById('note-argument');
const newExamples = document.getElementById('note-examples');
const newMethodology = document.getElementById('note-methods');
const newKeywords = document.getElementById('note-keywords');
const newSignificance = document.getElementById('note-significance');

// divs where the selected note will be appended
const titleBox = document.getElementById('bookTitle');
const authorName = document.getElementById('authorName');
const argumentBox = document.getElementById('argument-text');
const examplesBox = document.getElementById('example-text');
const keywordBox = document.getElementById('keyword-text');
const methodsBox = document.getElementById('methods-text');
const significanceBox = document.getElementById('significance-text');
const saveNote = document.getElementById('save-note');

// note boxes
const noteBoxes = document.getElementsByClassName('select-book'
);

// to grab user id from form 
const myuserId = document.getElementsByClassName('getId')[0];
const myUser = myuserId.getAttribute('id');

const saveNoteFunction = (myUser) => {
    const newNote = {
        field: newField.value,
        title: newTitle.value,
        author: newAuthor.value,
        argument: newArgument.value,
        examples: newExamples.value,
        keywords: newKeywords.value,
        methods: newMethodology.value,
        significance: newSignificance.value,
        user_id: myUser
    };

    fetch('/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newNote),
    })
    .then((res) => res.json())
    .then((newNote) => {
     console.log(newNote);


    })
    .catch(err => {
        console.error(err);
    }); 
}


const displayNote = (myId) => {
   
    fetch(`/api/books/${myId}`, {
        "method": 'GET',
    })
    .then(response => {
        return response.json();
    })
    .then(bookData => {
        console.log(bookData);
        titleBox.textContent = bookData.title;
        authorName.textContent = `by ${bookData.author}`;
        argumentBox.textContent = bookData.argument;
        examplesBox.textContent = bookData.examples;
    })
    .catch(err => {
        console.error(err);
    }); 
    console.log("does this button work?");
    }



// for loop to call displayNote function when any noteBox button is clicked
for (let i = 0; i < noteBoxes.length; i++) {
    // noteBoxes[i].setAttribute("id", `${i}`)
    noteBoxes[i].addEventListener('click', () => {
        let myId = noteBoxes[i].getAttribute('id')
        displayNote(myId); 
    })
}

// calls the save note function
saveNote.addEventListener('click', () => {
    saveNoteFunction(myUser);
})


