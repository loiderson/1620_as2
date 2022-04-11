const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const TextArea = `
<textarea class="NoteTaker" rows="35" cols="50"></textarea>
`

const saveBtn = `
<button class="SaveButton" type="button">
  Save
</button>
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

