/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
  return `
      <section class="entry__card">
              <div class="date">Date: ${entry.date}</div>
              <div class="concept">Concept: ${entry.concept}</div>
              <div class="entry">Entry: ${entry.entry}</div>
              <div class="mood">Mood: ${entry.mood}</div>
              <button class="deleteButton" id="deleteNote--${entry.id}">Delete</button>
              <button class="editButton" id="editNote--${entry.id}">Edit</button>
              <dialog  id="details--${entry.id}" class="editDialog">
              <input type="hidden" class="hiddenId" id="entry-id"/>
              <div class="edit__Card">
              <input type="date" class="edate" id="editDate--${entry.id}">
              <input type="text" class="econcept" id= "editConcept--${entry.id}" >
              <textarea class="eentry" id="editEntry--${entry.id}"></textarea>
              <select name="mood" class="emood" id="editMood--${entry.id}">
                <option>Randy Jackson Hot, baby</option>
                 <option>Bout it</option>
                  <option>Sallright</option>
                  <option>Naw dog, naw</option>
                  <option>Weak man, weak</option>
                  <option value="none" selected disabled hidden>How're you feeling?</option>
              </select>
              </div>
              <button class="button--close" id="saveEdit--${entry.id}">Save</button>
              </dialog>
              </section>
  `
} 

export default JournalEntryComponent