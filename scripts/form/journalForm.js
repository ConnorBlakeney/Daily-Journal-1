const eventHub = document.querySelector(".container")


export const JournalFormComponent = () => {
  const journalPage = document.querySelector(".container")

  journalPage.innerHTML =
  `<h1>Daily Journal</h1>
    <fieldset class="journalItems">
      <label for="journalDate">Date of Entry</label>
      <input type="date" id="dateColor" name="journalDate" class="journalDate" class="fields">
    </fieldset>
    <fieldset class="journalItems">
      <label for="conceptsCovered">Concepts Covered</label>
      <input type="text" name="conceptsCovered" class="conceptsCovered" id="conceptcolor" placeholder="What did you learn?">
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
        <option>Weak man, weak</option>
        <option value="none" selected disabled hidden>How're you feeling?</option>
      </select>
    </fieldset>
    <div class="filters" >
    <div class="moodFilter">
    <div class="filterLabel">Filter By Moods</div>
    <input type="radio" id="RJH" name="filter" value="Randy Jackson Hot, baby">
    <label for="RJH">Randy Jackson Hot, baby</label>
    <input type="radio" id="boutIt" name="filter" value="Bout it">
    <label for="boutIt">Bout It</label>
    <input type="radio" id="sallright" name="filter" value="Sallright">
    <label for="sallright">Sallright</label>
    <input type="radio" id="naw" name="filter" value= "Naw dog, naw">
    <label for="naw">Naw dog, naw</label>
    <input type="radio" id="weak" name="filter" value="Weak man, weak">
    <label for="weak">Weak man, weak</label>
    </div>
    <div class="searchFilter">
      <div>Search Journal Entries</div>
      <input type="text" id="searchField">
    </div>
  </div>
  <button  id="record">Record Journal Entry</button>
  <button id="show">Show Entries</button>
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

  eventHub.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
      if (event.target.id === "searchField") {
        const searchValue = event.target.value
        const message = new CustomEvent("searchInitiated", {
          detail: {
            search: searchValue
          }
        })
        eventHub.dispatchEvent(message)
      }
    }
  })

}










