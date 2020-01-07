
import { useJournalEntries, saveEntry, getEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
  const entries = useJournalEntries()
  const content = document.querySelector(".entryLog")
    eventHub.addEventListener("click", clickEvent => {  
      if (clickEvent.target.id === "record") {
        let date = document.querySelector(".journalDate").value
        let concept = document.querySelector(".conceptsCovered").value
        let entry = document.querySelector("#journalEntry").value
        let mood = document.querySelector("#mood").value
        if(entry === "" || date === "" || concept ==="" || mood ==="none"){
          alert("Please fill out all Fields")
        } 
        else {
        
        const newEntry = {
          date: date,
          concept: concept,
          entry: entry,
          mood: mood
        }
        saveEntry(newEntry) 
        document.querySelector(".journalDate").value = ""
        document.querySelector(".conceptsCovered").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#mood").value = ""
      }   
        }

      }
      )


//deletes Notes on click
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    console.log("delete has been clicked")
      const [prefix, id] = clickEvent.target.id.split("--")
    console.log(id)
      //Invoke the function that performs the delete operation. Then invokes useNotes and renders the list
     deleteEntry(id).then( () => render(useJournalEntries()) )
  }

  //edit button
  if (clickEvent.target.id.startsWith("editNote--")) {
    console.log("edit has been clicked")
        const [prefix, id] = clickEvent.target.id.split("--")
        const editEvent = new CustomEvent("editButtonClicked", {
          detail: {
            noteId: id
          }
        })
       eventHub.dispatchEvent(editEvent)

      }

})

eventHub.addEventListener("entryEdited", event => {
  const updatedEntries = useJournalEntries()
  render(updatedEntries)
})

eventHub.addEventListener("click", theEvent => {
  if (theEvent.target.id.startsWith("editNote--")) {
    const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
    const theDialog = document.querySelector(dialogSiblingSelector)
    theDialog.showModal()
  } else if (theEvent.target.classList.contains("button--close")) {
    const dialogElement = theEvent.target.parentNode
    dialogElement.close()
  } 
   }
)



        
        eventHub.addEventListener("click", event => {
          if (event.target.id ==="show") {
            if (document.querySelector(".entryLog").innerHTML === "") {
              document.querySelector("#show").innerHTML = "Hide Entries"
            getEntries().then(
                () => {
                  let entries = useJournalEntries()
                  render(entries)
                }
              )}
       else {
        document.querySelector(".entryLog").innerHTML = ""
        document.querySelector("#show").innerHTML = "Show Entries"
      }
    }
    })

      
  const render = (entries) => {
    content.innerHTML = `
    <section class="entryList">
  ${
    entries.map(
      (currentEntry) => {
        return JournalEntryComponent(currentEntry)
      }
      ).join(" ")
    }
    </section>
    ` 
  }
}
export default EntryListComponent
