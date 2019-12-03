/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const EntryListComponent = () => {
  const entryLog = document.querySelector(".entryLog")
  const entries = useJournalEntries()

  // Add to the existing HTML in the content element
  entryLog.innerHTML += `
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
export default EntryListComponent