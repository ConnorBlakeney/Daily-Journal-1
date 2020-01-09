import { useJournalEntries } from "../JournalDataProvider.js";
import JournalEntryComponent from "../JournalEntry.js";

const eventHub = document.querySelector(".container");
export const moodFilter = () => {
    const content = document.querySelector(".entryLog")
    eventHub.addEventListener("filterClick", event => {
        const allEntries = useJournalEntries()
        const mood = event.detail.mood
        const matchingEntries = allEntries.filter(entry => {
            if (entry.mood === mood) {
                return entry
            }
        })
        render(matchingEntries)
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
