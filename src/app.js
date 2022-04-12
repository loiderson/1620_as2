const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const TextArea = `
<textarea class="NoteTaker" rows="35" cols="50">1. Your Title Here \n2. Your Notes Here</textarea>
`

const saveBtn = `
<button class="SaveButton" onclick="SaveNoteArray()">Save</button>
`


const cancelBtn = `
<button class="CancelButton" onclick="CancelNote()">Cancel</button>
`

const closeBtn = `
<button class="CloseButton" type="button">
  Close
</button>
`

const iconCreate = document.querySelector('.fa-solid.fa-circle-plus')
const iconsClass = document.querySelector('.icons')
const writeNoteArea = document.querySelector('.write-note-area')
var cancelBtnVari = document.querySelector('.CancelButton')
var saveBtnVari = document.querySelector('.SaveButton')
const textAreaVar = document.querySelector('.NoteTaker')

function NoteTakeCreate(evt) {
  if (evt.target.localName === "i") {
    writeNoteArea.insertAdjacentHTML('afterbegin', TextArea)
    writeNoteArea.insertAdjacentHTML('afterbegin', cancelBtn)
    writeNoteArea.insertAdjacentHTML('afterbegin', saveBtn)
    cancelBtnVari = document.querySelector('.CancelButton')
  }
}
iconsClass.addEventListener('click', NoteTakeCreate)



//function CancelNote() {
  //text = document.getElementsByClassName("NoteTaker")
  //text.remove()
  //(writeNoteArea.firstChild.cancelBtn('click'))
//}
//cancelBtnVari.addEventListener('click', CancelNote)

function CancelNote() {
  var text = document.querySelector('.NoteTaker')
  text.parentElement.removeChild(text)
  var saveBtnVari = document.querySelector('.SaveButton')
  saveBtnVari.parentElement.removeChild(saveBtnVari)
  cancelBtnVari.parentElement.removeChild(cancelBtnVari)
}

function SaveNoteArray() {
  let textbox = document.querySelector(".NoteTaker")
  let StringSplit = textbox.value.split('\n')
  let Title_Note
  if (StringSplit[0] == "") {
    Title_Note = 'NO TITLE'
  }
  else {
    Title_Note = StringSplit[0]
  }
  StringSplit.shift()
  let body = StringSplit.join(' ')
  let id = notes.length + 1

  let note = {
    title: Title_Note,
    noteBody: body,
    id: id
  }
  notes.push(note)
  CancelNote()
}


//function DarkThemeTog() {
  //const darkTheme = document.querySelector(".light-theme")
  //darkTheme.classList.toggle("dark-theme")
//}