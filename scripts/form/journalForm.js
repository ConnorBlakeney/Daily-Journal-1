const eventHub = document.querySelector(".container")


export const JournalFormComponent = () => {
  const journalPage = document.querySelector(".container")

  journalPage.innerHTML =
  `<h1>Daily Journal</h1>
    <fieldset class="journalItems">
      <label for="journalDate">Date of Entry</label>
      <input type="date" name="journalDate" class="journalDate" class="fields">
    </fieldset>
    <fieldset class="journalItems">
      <label for="conceptsCovered">Concepts Covered</label>
      <input type="text" name="conceptsCovered" class="conceptsCovered" class="fields" placeholder="What did you learn?">
    </fieldset>
    <fieldset class="journalItems">
      <label for="journalEntry">Journal Entry</label>
      <textarea name="journalField" id="journalEntry" cols="20" rows="2" placeholder="How's it going?"
      class="fields"></textarea>
    </fieldset>
    <fieldset class="journalItems">
      <label for="mood">Mood for the day</label>
      <select name="mood" id="mood" class="fields">
        <option>Randy Jackson Hot, baby</option>
        <option>Bout it</option>
        <option>Sallright</option>
        <option>Naw dog, naw</option>
        <option>Weak man, weak</option>
        <option value="none" selected disabled hidden>How're you feeling?</option>
      </select>
    </fieldset>
  <button class="fields"  id="record">Record Journal Entry</button>
  <button class="fields" id="show">Show Entries</button>
  <div class="entryLog"></div>
  `
}










