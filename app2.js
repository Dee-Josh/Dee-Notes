let notes = JSON.parse(localStorage.getItem("notes"));
// console.log(notes);


const allNotes = document.querySelector(".new-text-template");

const notePlus = document.querySelector(".note-plus");


let noteIndex;

if (notes === null || notes[0] === undefined ) {
    allNotes.innerHTML = `<h1 class="noNotes">NO NOTES YET</h1>`;
}else{
    notes.forEach(note =>{
        noteIndex = note.index;
        // console.log(noteIndex);
        allNotes.innerHTML = allNotes.innerHTML + `
        <div class="new-note">
            <h2 class="note-title">${note.noteTitle}</h2>
            <p class="note-body">${note.noteBody}</p>
            <p class="time">${note.time}</p>
            <i class="fa-solid fa-trash-can" title="Delete Note">
        </div>`;
        
    })
}

const eachNotes = document.querySelectorAll(".new-note");

let noteDeleted = false;

eachNotes.forEach((note, index)=>{
    note.addEventListener("click", ()=>{
        localStorage.setItem("isNoteClicked", true);
        localStorage.setItem("clickedNote", index);
        if(noteDeleted){
            location.reload();
        }else{
            window.location = "note.html";
        }
        noteDeleted = false;
    })
    
})

notePlus.addEventListener("click", ()=>{
    localStorage.setItem("isNoteClicked", false);
})

const trashCan = document.querySelectorAll(".fa-trash-can");

trashCan.forEach((can, index)=>{
    can.addEventListener("click", ()=>{

        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        location.reload();
        
        window.location = "index.html";

        noteDeleted = true;
        
    })
})
