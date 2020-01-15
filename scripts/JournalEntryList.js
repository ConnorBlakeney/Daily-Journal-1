
import { useJournalEntries, saveEntry, getEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
  const content = document.querySelector(".entryLog")
    eventHub.addEventListener("click", clickEvent => {  
      if (clickEvent.target.id === "record") {
        let date = document.querySelector(".journalDate").value
        let concept = document.querySelector(".conceptsCovered").value
        let entry = document.querySelector("#journalEntry").value
        let mood = document.querySelector("#moods").value
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
        saveEntry(newEntry) .then(
          () => {
            getEntries().then(
              () => {
                let recordedEntries = useJournalEntries()
                content.classList.remove("emptyLog")
                render(recordedEntries)
              }
            )
          }
        )
        document.querySelector(".journalDate").value = ""
        document.querySelector(".conceptsCovered").value = ""
        document.querySelector("#journalEntry").value = ""
        document.querySelector("#moods").value = ""
       
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
        const [prefix, id] = clickEvent.target.id.split("--")
        const editEvent = new CustomEvent("editButtonClicked", {
          detail: {
            noteId: id
          }
        })
       eventHub.dispatchEvent(editEvent)

      }

})

//renders Udated entries on save
eventHub.addEventListener("entryEdited", event => {
  const updatedEntries = useJournalEntries()
  content.classList.remove("emptyLog")
  render(updatedEntries)
})


//Opens Edit Button Dialog
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
                  content.classList.remove("emptyLog")
                  render(entries)
                }
              )}
       else {
        document.querySelector(".entryLog").innerHTML = ""
        document.querySelector("#show").innerHTML = "Show Entries"
      }
    }
    })

    //Searches by key press
    eventHub.addEventListener("searchInitiated", event => {
      const searchTerm = event.detail.search
       const entries = useJournalEntries()
       const matchingEntries = entries.filter(entry => {
         if (entry.concept.includes(searchTerm.toUpperCase()) || entry.entry.includes(searchTerm.toUpperCase())) {
           return entry
         }
       })
       if (matchingEntries.length > 0) {
        content.classList.remove("emptyLog")
         render(matchingEntries)
       } else {
         content.classList.add("emptyLog")
         content.innerHTML = "Your Search Found Nothing"
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
