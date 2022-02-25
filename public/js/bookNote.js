
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
const fieldBox = document.getElementById('field-text');
const argumentBox = document.getElementById('argument-text');
const examplesBox = document.getElementById('example-text');
const keywordBox = document.getElementById('keyword-text');
const methodsBox = document.getElementById('methods-text');
const significanceBox = document.getElementById('significance-text');
const saveNote = document.getElementById('save-note');

// note boxes
const noteBoxes = document.getElementsByClassName('select-book'
);
// const displayNoteBox = document.getElementsByClassName('display-note-container');

const deleteBtn = document.getElementById('delete-note');
// const editBtn = document.getElementById('edit-note');
const importantBtn = document.getElementById('important-note');

// to grab user id to save to form input data 
const myuserId = document.getElementsByClassName('getId')[0];
const myUser = myuserId.getAttribute('value');

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


const displayNote = (bookId) => {
   
    fetch(`/api/books/${bookId}`, {
        "method": 'GET',
    })
    .then(response => {
        return response.json();
    })
    .then(bookData => {
        console.log(bookData);
        titleBox.textContent = bookData.title;
        authorName.textContent = `by ${bookData.author}`;
        fieldBox.textContent = bookData.field;
        argumentBox.textContent = bookData.argument;
        examplesBox.textContent = bookData.examples;
        methodsBox.textContent = bookData.methods;
        keywordBox.textContent = bookData.keywords;
        significanceBox.textContent = bookData.significance;
    })
    .catch(err => {
        console.error(err);
    }); 
    console.log("does this button work?");
    }


const deleteNoteFunction = (bookId) => {

    fetch(`/api/books/${bookId}`, {
        "method": 'DELETE',
    })
    .then(response => {
        return response.json();
        
    })
    .then(bookData => {
        console.log(bookData);
    })
    .catch(err => {
        console.error(err);
    })
}

// const editNoteFunction = (bookId) => {

//     fetch(`/api/books/${bookId}`, {
//         "method": 'PUT',
//     })
//     .then(response => {
//         return response.json();
        
//     })
//     .then(bookData => {
//         console.log(bookData);
//     })
//     .catch(err => {
//         console.error(err);
//     })
// }


// for loop to call displayNote function when any noteBox button is clicked
for (let i = 0; i < noteBoxes.length; i++) {
    noteBoxes[i].addEventListener('click', () => {
        let bookId = noteBoxes[i].getAttribute('id')
        displayNote(bookId); 

        deleteBtn.addEventListener('click', () => {
            deleteNoteFunction(bookId);
            location.reload();
        }); 

        // editBtn.addEventListener('click', () => {
        //     editNoteFunction(bookId);
        //     location.reload();
        // }) 
        console.log(importantBtn)
        importantBtn.addEventListener('click', () => {
            noteBoxes[i].style.color = "#2963DF";
            console.log('important button');
            console.log(importantBtn);
        });
        myuserId.classList.remove("active");
        displayedNote.classList.remove("active");

    })
}

// calls the save note function
saveNote.addEventListener('click', () => {
    saveNoteFunction(myUser);
})


const addBtn = document.getElementById('add-new');
const displayedNote = document.getElementsByClassName('display-note-container')[0];
addBtn.addEventListener('click', () => {
        myuserId.classList.toggle("active");
        displayedNote.classList.toggle("active");
});





// const editNoteBox = document.getElementsByClassName('edit-note-box');

// editBtn.addEventListener('click', () => {
//     displayNoteBox[0].classList.toggle("active");
//     editNoteBox[0].classList.toggle("active");
// })