
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
const argumentBox = document.getElementById('argument-text');
const examplesBox = document.getElementById('example-text');
const keywordBox = document.getElementById('keyword-text');
const methodsBox = document.getElementById('methods-text');
const significanceBox = document.getElementById('significance-text');
const saveNote = document.getElementById('save-note');

// note boxes
const noteBoxes = document.getElementsByClassName('select-book'
);


const saveNoteFunction = () => {
    const newNote = {
        field: newField.value,
        title: newTitle.value,
        author: newAuthor.value,
        argument: newArgument.value,
        examples: newExamples.value,
        keywords: newKeywords.value,
        methods: newMethodology.value,
        significance: newSignificance.value,
        // user_id: ,
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


const displayNote = () => {
    const noteId = document.getElementById('.select-book').getAttribute("id");
    console.log(noteId);

    fetch(`/api/books/${noteId}`, {
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

// for loop to call displayNote function when any noteBox button is clicked
for (let i = 0; i < noteBoxes.length; i++) {
    noteBoxes[i].setAttribute("id", `${i}`)
    noteBoxes[i].addEventListener('click', () => {
        displayNote(); 
    })
}

// calls the save note function
saveNote.addEventListener('click', () => {
    saveNoteFunction();
    console.log(newField.value);
    console.log(newTitle.value);
    console.log(newAuthor.value);
    console.log(newArgument.value);
    console.log(newExamples.value);
    console.log(newKeywords.value);
    console.log(newMethodology.value);
    console.log(newSignificance.value);
    console.log(user_id);
})


