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
      <select name="mood" id="moods" class="fields">
        <option value="RJH">Randy Jackson Hot, baby</option>
        <option>Bout it</option>
        <option>Sallright</option>
        <option>Naw dog, naw</option>
        <option value="weak">Weak man, weak</option>
        <option value="none" selected disabled hidden>How're you feeling?</option>
      </select>
    </fieldset>
    <div class="filters" >
    <div class="filterLabel">Filter By Moods</div>
    <input type="radio" id="RJH" name="filter" value="Randy Jackson Hot, baby">
    <label for="RJH">Randy Jackson Hot, baby</label>
    <input type="radio" id="boutIt" name="filter" value="Bout it">
    <label for="boutIt">Bout It</label>
    <input type="radio" id="weak" name="filter" value="Weak Man, Weak">
    <label for="weak">Weak Man, Weak</label>
  </div>
  <button class="fields"  id="record">Record Journal Entry</button>
  <button class="fields" id="show">Show Entries</button>
  <div class="entryLog"></div>
  `

  eventHub.addEventListener("click", event => {
    if (event.target.name ==="filter") {
      const mood = event.target.value
      const message = new CustomEvent("filterClick", {
        detail: {
          mood: mood
        }
      })
      eventHub.dispatchEvent(message)
    }
  })

}










